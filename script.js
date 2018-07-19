var obj;
var results;
var description;
var link;

$(document).ready(function(){

	$("#myButton").click(function(){

		$("#myButton").hide();
		$("input").css("margin-left","20px");
		$("#cross").html('<a href="#"><i class="fa fa-times" title="Click to erase" style="font-size:25px; color:red" ></i></a>');
		$("#divContainer").animate({marginTop: "0px"},{duration:1000});

		$.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $('#search').val() +
				'&limit=10&namespace=0&format=json',

			function(responseData, status, xhr ) {

				console.log(xhr.responseText);
			  	obj = responseData; // or xhr.responseText
			  	results = obj[1];
			  	description = obj[2];
			  	link = obj[3];
			  	appendResults(results,description,link);

			}, "jsonp" );
	});

	$("#cross").click(function(){
		location.reload(true);
	});
});

function appendResults(results,description,link) {

	var div = $("#divID")[0]; // get the first element in the object i.e. HTML DOM Object
	// OR var div = document.getElementById('divID');

	for (var i = 0; i < 10; i++) {
		console.log(results[i]);
		$("#divID").append('<a target="_blank" href='+link[i]+'><div class="infoDiv container-fluid text-center"><b>' +
		results[i] + '</b><br>' + description[i] + '</div></a>')
	}

}
