$(document).ready(function(){

	$(".value-holder .fa-star").click(function(){
		var id = $(this).attr("id");
		var rating = id.substr(id.length - 1);
		$("#filterHowHigh").text(rating);

		$(".value-holder .fa-star").each(function(){
			var starId = $(this).attr("id");
			var starPos = starId.substr(id.length - 1);
			if(starPos <= rating){
				$(this).addClass("star-active");
			}else{
				$(this).removeClass("star-active")
			}
		});
	});

	$(".value-holder ul li").click(function(){
		var item = $(this);
		var days = $(item).text();

		$(".value-holder ul li").each(function(){
			$(this).removeClass("days-active");
		});

		$(this).addClass("days-active");
		$("#filterWhen").text(days);
	});

	$("#addCountryBtn").click(function(){
		var city = $("#filterWhereInput").val();
		$("#filterWhere").text(city);
	});

});