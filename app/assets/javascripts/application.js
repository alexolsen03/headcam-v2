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
//= require gmaps/google
//= require underscore
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
			if($("#addressTitle").text() != ""){
				marker.setIcon(icon2);
			}
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

function giveCurrentMarkerActiveIcon(){
	console.log('giving active icon');
	console.log('index is' + currentMarkerIndex);
	console.log('mark arr is ' + markArr.length);
	console.log(markArr[currentMarkerIndex]);
	markArr[currentMarkerIndex].setIcon(icon2);
}

function getVideoObjectFromList(title){
	var returnItem = null;
	$("div.inner-block").each(function(index){
		var wrapper = $(this);
		var outterDiv = $(this).children()[1];
		if( $(outterDiv).children()[0].innerHTML == title){
			console.log("RETURNING " + wrapper);
			returnItem = wrapper;
		}
	});
	return returnItem;
}