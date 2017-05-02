
function Control(table, inProgram) {
	this.targetProgram = inProgram;
	this.targetTable = table;
}
Control.prototype.changePage = function(pageChange) {
	var table = this.targetTable;
	if (pageChange === "first") {
    		table.currentPage = 0;
    	} else if (pageChange === "last") {
    		table.currentPage = table.maxPage;
    	} else {
    		table.currentPage += pageChange;
    		if (table.currentPage < 0) table.currentPage = 0;
    		if (table.currentPage > table.maxPage) table.currentPage = table.maxPage;
    	}
		this.targetProgram.loadJSON("responsetimes", "?page="+table.currentPage);
    	var pageNumElement = document.getElementById("currentPage");
    	pageNumElement.innerHTML = "page "+(table.currentPage+1);
    	var tableElement = document.getElementById("table");
    	tableElement.innerHTML = table.tabulateCurrentPage();
}

Control.prototype.postEntry = function() {

	console.log("TODO");

	name = "responsetimes";
	var t = this;
	var request = new XMLHttpRequest();
	request.open("POST", name);
	request.setRequestHeader("Content-type", "application/json");

	var inputTimestamp = parseInt(document.getElementById('newTimestamp').value);
	var timestamp = inputTimestamp || 0;
	var code = document.getElementById('newCountryCode').value;
	var inputResponseTime = parseInt(document.getElementById('newResponseTime').value);
	var time = inputResponseTime || 0;
	var body = { request_timestamp:timestamp, country_code:code, response_time:time };

	var jsonBody = JSON.stringify(body);
	console.log(body);
	console.log(jsonBody);


	//request.setBody = "{ request_timestamp:<int>, country_code:<string>, response_time:<int> }"


	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			console.log(request.responseText);
			//t.handlePostResponse(request.responseText);
			t.targetProgram.loadJSON("responsetimes");
		}
	}
	request.send(jsonBody);

}