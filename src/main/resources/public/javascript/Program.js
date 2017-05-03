//global reference to dataFilterer program instance to allow easy hacking
var dataFilterer;

function loadProgram() {
    dataFilterer = new Program();
}

function Program() {
	this.loadJSON("logs");
	this.table = new DynamicTable();
	this.control = new Control(this.table, this);
}
Program.prototype.loadJSON = function(name, queryString) {
	var t = this;
	var query = queryString || "";
	var request = new XMLHttpRequest();
	request.open("GET", name+query);
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			t.handleLoadedJSON(request.responseText);
		}
	}
	request.send();
}
Program.prototype.handleLoadedJSON = function(text) {
	// DEBUG
	// lets see what the response is ok?
	console.log(text);

	var jsonData = JSON.parse(text);
	this.table.setContents(jsonData);
}
