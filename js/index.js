
//needs refactoring
// toggles the icons and slide functionality on projects buttons
// $(function(){
// 	$(".projectButton").each(function(){
		
// 		// event.stopPropagation();
// 	})
// })



// $(".projectLinks").each(function(){
// 	$(".projectButton").hover(function(){
// 		$(".icon").slideToggle(".5s");
// 	});
// });

// $(".projectButton").each( function(){
// 	$(".projectButton").hover(function(){	
// 		$(this).slideToggle(".2s");
// 	});
// 	});
// });
// var icon = ["#sqlIcon", "#balsamiqIcon", "#pypic", "#mvc"]
// var projectBtn = ["#blueRibbons", "#python", "#design", "#sql"]
// $(projectBtn).each( function(){
// $(this).hover(function(){
// 	$(icon).slideToggle(".5s");
// });
// });

$("#blueRibbons").hover(function(){
	$("#mvc").slideToggle(".5s")
});
$("#python").hover(function(){
	$("#pypic").slideToggle(".5s")
});
$("#design").hover(function(){
	$("#balsamiqIcon").slideToggle(".5s")
});
$("#sql").hover(function(){
	$("#sqlIcon").slideToggle(".5s")
});

$(".date").ready(function(){
	var time = Date();
	// console.log(d);
	time = time.getHours();

	console.log(time);
	if (time <12){
		$("#greeting").append("<p>Good Morning</p>");
	} else if (time <17){
		$("#greeting").append("<p>Good Afternoon</p>");
	} else{
		$("#greeting").append("<p>Good Evening</p>");
	}
});