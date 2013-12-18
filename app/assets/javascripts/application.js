// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require gmaps/google
//= require_tree .

function addLocationListListener(){
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
}

function redirect_to(url){
	window.location = url;
}

function giveCurrentMarkerDefaultIcon(){
	console.log('giving default icon');
	console.log('index is' + currentMarkerIndex);
	console.log('mark arr is ' + markArr.length);
	console.log(markArr[currentMarkerIndex]);
	markArr[currentMarkerIndex].setIcon(icon1);
}