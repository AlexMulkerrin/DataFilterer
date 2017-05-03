
const countryCodes = {  "AW":"Aruba", "AF":"Afghanistan", "AO":"Angola",
"AI":"Anguilla", "AL":"Albania", "AD":"Andorra", "AN":"Netherlands Antilles",
"AE":"United Arab Emirates", "AR":"Argentina", "AM":"Armenia",
"AS":"American Samoa", "AQ":"Antarctica", "TF":"French Southern territories",
"AG":"Antigua and Barbuda", "AU":"Australia", "AT":"Austria", "AZ":"Azerbaijan",
"BI":"Burundi", "BE":"Belgium", "BJ":"Benin", "BF":"Burkina Faso", "BD":"Bangladesh",
"BG":"Bulgaria", "BH":"Bahrain", "BS":"Bahamas", "BA":"Bosnia and Herzegovina",
"BY":"Belarus", "BZ":"Belize", "BM":"Bermuda", "BO":"Bolivia", "BR":"Brazil",
"BB":"Barbados", "BN":"Brunei", "BT":"Bhutan", "BV":"Bouvet Island", "BW":"Botswana",
"CF":"Central African Republic", "CA":"Canada", "CC":"Cocos (Keeling) Islands",
"CH":"Switzerland", "CL":"Chile", "CN":"China", "CI":"CÃ´te dÂ’Ivoire", "CM":"Cameroon",
"CD":"Congo, The Democratic Republic of the", "CG":"Congo", "CK":"Cook Islands",
"CO":"Colombia", "KM":"Comoros", "CV":"Cape Verde", "CR":"Costa Rica", "CU":"Cuba",
"CX":"Christmas Island", "KY":"Cayman Islands", "CY":"Cyprus", "CZ":"Czech Republic",
"DE":"Germany", "DJ":"Djibouti", "DM":"Dominica", "DK":"Denmark", "DO":"Dominican Republic",
"DZ":"Algeria", "EC":"Ecuador", "EG":"Egypt", "ER":"Eritrea", "EH":"Western Sahara",
"ES":"Spain", "EE":"Estonia", "ET":"Ethiopia", "FI":"Finland", "FJ":"Fiji Islands",
"FK":"Falkland Islands", "FR":"France", "FO":"Faroe Islands", "FM":"Micronesia, Federated States of",
"GA":"Gabon", "GB":"United Kingdom", "GE":"Georgia", "GH":"Ghana", "GI":"Gibraltar",
"GN":"Guinea", "GP":"Guadeloupe", "GM":"Gambia", "GW":"Guinea-Bissau", "GQ":"Equatorial Guinea",
"GR":"Greece", "GD":"Grenada", "GL":"Greenland", "GT":"Guatemala", "GF":"French Guiana",
"GU":"Guam", "GY":"Guyana", "HK":"Hong Kong", "HM":"Heard Island and McDonald Islands",
"HN":"Honduras", "HR":"Croatia", "HT":"Haiti", "HU":"Hungary", "ID":"Indonesia",
"IN":"India", "IO":"British Indian Ocean Territory", "IE":"Ireland", "IR":"Iran",
"IQ":"Iraq", "IS":"Iceland", "IL":"Israel", "IT":"Italy", "JM":"Jamaica", "JO":"Jordan",
"JP":"Japan", "KZ":"Kazakstan", "KE":"Kenya", "KG":"Kyrgyzstan", "KH":"Cambodia",
"KI":"Kiribati", "KN":"Saint Kitts and Nevis", "KR":"South Korea", "KW":"Kuwait",
"LA":"Laos", "LB":"Lebanon", "LR":"Liberia", "LY":"Libyan Arab Jamahiriya", "LC":"Saint Lucia",
"LI":"Liechtenstein", "LK":"Sri Lanka", "LS":"Lesotho", "LT":"Lithuania", "LU":"Luxembourg",
"LV":"Latvia", "MO":"Macao", "MA":"Morocco", "MC":"Monaco", "MD":"Moldova", "MG":"Madagascar",
"MV":"Maldives", "MX":"Mexico", "MH":"Marshall Islands", "MK":"Macedonia", "ML":"Mali",
"MT":"Malta", "MM":"Myanmar", "MN":"Mongolia", "MP":"Northern Mariana Islands",
"MZ":"Mozambique", "MR":"Mauritania", "MS":"Montserrat", "MQ":"Martinique", "MU":"Mauritius",
"MW":"Malawi", "MY":"Malaysia", "YT":"Mayotte", "NA":"Namibia", "NC":"New Caledonia",
"NE":"Niger", "NF":"Norfolk Island", "NG":"Nigeria", "NI":"Nicaragua", "NU":"Niue",
"NL":"Netherlands", "NO":"Norway", "NP":"Nepal", "NR":"Nauru", "NZ":"New Zealand",
"OM":"Oman", "PK":"Pakistan", "PA":"Panama", "PN":"Pitcairn", "PE":"Peru", "PH":"Philippines",
"PW":"Palau", "PG":"Papua New Guinea", "PL":"Poland", "PR":"Puerto Rico", "KP":"North Korea",
"PT":"Portugal", "PY":"Paraguay", "PS":"Palestine", "PF":"French Polynesia", "QA":"Qatar",
"RE":"RÃ©union", "RO":"Romania", "RU":"Russian Federation", "RW":"Rwanda", "SA":"Saudi Arabia",
"SD":"Sudan", "SN":"Senegal", "SG":"Singapore", "GS":"South Georgia and the South Sandwich Islands",
"SH":"Saint Helena", "SJ":"Svalbard and Jan Mayen", "SB":"Solomon Islands", "SL":"Sierra Leone",
"SV":"El Salvador", "SM":"San Marino", "SO":"Somalia", "PM":"Saint Pierre and Miquelon",
"ST":"Sao Tome and Principe", "SR":"Suriname", "SK":"Slovakia", "SI":"Slovenia",
"SE":"Sweden", "SZ":"Swaziland", "SC":"Seychelles", "SY":"Syria", "TC":"Turks and Caicos Islands",
"TD":"Chad", "TG":"Togo", "TH":"Thailand", "TJ":"Tajikistan", "TK":"Tokelau", "TM":"Turkmenistan",
"TP":"East Timor", "TO":"Tonga", "TT":"Trinidad and Tobago", "TN":"Tunisia", "TR":"Turkey",
"TV":"Tuvalu", "TW":"Taiwan", "TZ":"Tanzania", "UG":"Uganda", "UA":"Ukraine",
"UM":"United States Minor Outlying Islands", "UY":"Uruguay", "US":"United States",
"UZ":"Uzbekistan", "VA":"Holy See (Vatican City State)", "VC":"Saint Vincent and the Grenadines",
"VE":"Venezuela", "VG":"Virgin Islands, British", "VI":"Virgin Islands, U.S.", "VN":"Vietnam",
"VU":"Vanuatu", "WF":"Wallis and Futuna", "WS":"Samoa", "YE":"Yemen", "YU":"Yugoslavia",
"ZA":"South Africa", "ZM":"Zambia", "ZW":"Zimbabwe"}

function DynamicTable() {
	this.entriesPerPage = 20;
	this.currentPage = 0;
	this.maxPage = 0;

	this.lastSort = "";
	this.isAscending = true;

	// default contents whilst loading dataset
	this.contents = [{"request_timestamp":0,"country_code":"null","response_time":0}];
	document.getElementById("table").innerHTML = this.tabulateCurrentPage();
}
DynamicTable.prototype.sortByColumn = function(columnName) {
	this.isAscending = (columnName === this.lastSort) ? !this.isAscending : true;
	this.lastSort = columnName;

	if (this.isAscending) {
		this.contents.sort(
			function (a, b) {
				if (a[columnName] > b[columnName]) return 1;
				if (a[columnName] < b[columnName]) return -1;
				return 0;
			}
		);
	} else {
		this.contents.sort(
			function (a, b) {
				if (a[columnName] > b[columnName]) return -1;
				if (a[columnName] < b[columnName]) return 1;
				return 0;
			}
		);
	}
	// reset page to 0
	//this.currentPage = 0;
	//document.getElementById("currentPage").innerHTML = "page "+(this.currentPage+1);

	document.getElementById("table").innerHTML = this.tabulateCurrentPage();
}
DynamicTable.prototype.setContents = function(jsonData) {

	// TODO filter this so it's only the attributes we're interested in :)
	this.contents = [];
	var responseTimes = jsonData;//._embedded.responsetimes;
	var key = Object.keys(responseTimes[0]);
	for (var i=0; i<responseTimes.length; i++) {
		this.contents[i] = {};
		for (var j=0; j<key.length; j++) {
			if (key[j] !== "_links") { // omit linking data in HAL json format
				this.contents[i][key[j]] = responseTimes[i][key[j]];
			}
		}
	}

	//populate the information about dataset size
	//this.entriesPerPage = jsonData.page.size;
    //this.currentPage = jsonData.page.number;
    //this.maxPage = jsonData.page.totalPages-1;
    //this.totalElements = jsonData.page.totalElements;
    //console.log(this.entriesPerPage+", "+this.currentPage+", "+this.maxPage+", "+this.totalElements);


	//this.contents = jsonData._embedded.responsetimes;
	//this.maxPage = Math.floor((this.contents.length-0.1)/this.entriesPerPage);

	document.getElementById("table").innerHTML = this.tabulateCurrentPage();
	// DEBUG
    // just set it as the plain jsondata rather than doing anything else with it :P
    //console.log(this.contents);
    //document.getElementById("table").innerHTML = this.contents;
}
DynamicTable.prototype.tabulateCurrentPage = function(start,end) {
	var start = 0;//this.currentPage*this.entriesPerPage; TODO update for new system
	var end = start + this.entriesPerPage;
	return this.tabulateObjectList(start, end);
}
DynamicTable.prototype.tabulateObjectList = function(inStart, inEnd) {
	var list = this.contents;
	var start = inStart || 0;
	var end = inEnd || start + this.entriesPerPage;

	var methodPath = "dataFilterer.table.sortByColumn"
	var out ="<table id='sortableTable' ><tr>";

	// column headers
	var key = Object.keys(list[0]);
	for (var i=0; i<key.length; i++) {

		var headerText = key[i];//.split("_")
			//.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
			//.join(" ");

		out +="<th class='coloumHeader' title='sort by column'";
		out += "onclick='"+methodPath+"(\""+key[i]+"\")'>" ;
		out += headerText;

		// add UTF symbols to denote sort
		if (key[i] === this.lastSort) {
			if (this.isAscending) {
				out+=" &#9650";
			} else {
				out+=" &#9660";
			}
		} else {
			out+=" --- ";
		}
		out+="</th>";
	}
	out +="</tr>";

	// row data
	for (var i=start; i<end && i<list.length; i++) {
		out +="<tr>";
		for (var j=0; j<key.length; j++) {
			var text = this.getHumanFormatting(key[j], list[i][key[j]]);
			out +="<td>"+text+"</td>";
		}
		out += "</tr>";
	}
	out += "</table>";
	return out;
}

DynamicTable.prototype.getHumanFormatting = function(key, value) {
	var result = "";
	switch(key) {
		case 'requestTimestamp':
			var elapsedMilli = new Date(parseInt(value)*1000);
			result = elapsedMilli.toUTCString();
			break;
		case 'countryCode':
			var fullName = countryCodes[value];
			result = fullName || 'unknown';
			break;
		default:
			result = value;
	}
	return result
}