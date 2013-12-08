$(document).ready(function(){

	$(".star-holder i").click(function(){
		var id = $(this).attr("id");
		var rating = id.substr(id.length - 1);
		$("#filterHowHigh").val(rating);

		$(".star-holder i").each(function(){
			var starId = $(this).attr("id");
			var starPos = starId.substr(id.length - 1);
			if(starPos <= rating){
				$(this).addClass("star-active");
			}else{
				$(this).removeClass("star-active")
			}
		});

	});

});