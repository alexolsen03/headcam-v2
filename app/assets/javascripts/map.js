$(document).ready(function(){

	$("div.inner-block").each(function(index){
		var block = $(this);
		$(block).hover(function(item){
			var title = $(block).children()[1].innerHTML;
			var marker = markArr[index];
			marker.setIcon(icon2);
		}, function(item){
			var title = $(block).children()[1].innerHTML;
			var marker = markArr[index];
			marker.setIcon(icon1);
		});
	});

});