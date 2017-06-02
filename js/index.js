


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
// $(".brand-heading").ready(function(){
// 	$('#mathew').animate({width: 100%});
// });



// $( ".brand-heading" ).ready(function() {
//   $( "#mathew" ).animate({
//     width: [ "toggle", "swing" ],
//     height: [ "toggle", "swing" ],
//     opacity: "toggle"
//   }, 5000, "linear", function() {
//     $( this ).after( "<h1>Mathew Perrow</h1>" );
//   });
// });

	

