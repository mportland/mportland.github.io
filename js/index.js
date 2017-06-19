


$(".date").ready(function(){
	var hours = new Date();
	hours = hours.getHours();
	
	console.log(hours);
	if (hours <12){
		$("#greeting").append("<p>Good Morning</p>");
	} else if (hours <17){
		$("#greeting").append("<p>Good Afternoon</p>");
	} else{
		$("#greeting").append("<p>Good Evening</p>");
	}
});



