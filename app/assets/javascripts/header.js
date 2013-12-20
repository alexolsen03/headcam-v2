$(document).ready(function(){
	$("#settings-wrapper").click(function(){
		var container = $(this);

		$("#settings-menu").addClass("settings-active");
		container.addClass("active");

		$(document).mouseup(function(e){
            if(!container.is(e.target) && container.has(e.target).length==0){
                    container.removeClass('active');
                    $("#settings-menu").removeClass('settings-active');
                    $(document).unbind('mouseup');
            }
	    });

	});
});