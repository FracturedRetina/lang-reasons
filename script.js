var lang = getParameterByName("lang");

if (lang == "") {
	lang = "en"
}

$(document).ready(function() {
	$.getJSON("content.json", function(json) {
		for (var key in json.content) {
			if (json.content.hasOwnProperty(key)) {
				$(key).html(json.content[key][lang]);
			}
		}
		
		shuffle(json.salutations);
		
		var fullstr = "-";
		
		for (var i = 0; i < json.salutations.length; i++) {
			fullstr += json.salutations[i] + "-";
		}
		$('#subtitle').html(fullstr);
	});
});


function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//http://stackoverflow.com/a/6274381/1653609
function shuffle(a) {
	for (var i = a.length; i; i--) {
	var j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}