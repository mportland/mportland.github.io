


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
$("#resumefile").load("pages/ResumeJune2017HTML.html")
// var expand = {"width":"850","height":"1100"}
// $("#resumefile").hover(function(){
// 	$(this).toggle("slow")
		
// })
  
//  $(".resumecontainer").mouseover(function(){ 
// $("#resumefile").toggle(function() {
//     $(this).stop().animate({
//         width: "300px",
//         height: "400px"
//     }, 500);
// }, function() {
//     $(this).stop().animate({
//         width: "850px",
//         height: "1100px"
//     }, 500);
// });
// });

