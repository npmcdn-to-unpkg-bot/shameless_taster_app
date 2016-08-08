var myApp = {
	newlat: "",
	newlong: ""
};


myApp.init = function(){
	navigator.geolocation.getCurrentPosition(function(position) {
	myApp.getStore(position.coords.latitude, position.coords.longitude);
	// initMap();

	// allLocationData(position.coords.latitude, position.coords.longitude);

	// console.log(position.coords);
	myApp.newlat = position.coords.latitude;
	myApp.newlong = position.coords.longitude;
	var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude}


	// myApp.newlat = position.coords
	myApp.map.setCenter(myLatLng);
	myApp.marker.setPosition(myLatLng);
	getStore(myApp.newlat, myApp.newlong);

	console.log(myApp.newlat);

	});	

};

var userLatitude = myApp.newlat;
var userLongitude = myApp.newlong;

//get store info from api

myApp.getStore = function(newlat, newlong){	

	// console.log(newlat, newlong)

	 $.ajax({
	   url: 'https://lcboapi.com/stores?lat=' + newlat + '&lon=' + newlong,
	   headers: { 'Authorization': 'Token MDpiZDViOGEyMi01OTIxLTExZTYtYTJmNC1jMzhkYzMxNmY2Yzc6RU92eVphaDk5UWlpQ1d2cmFseEFsQzl2MFRQSzRybVVVMDVN' }
	 }).then(function(data) {
	   console.log(data.result);

	});
};




$(function(){
	//we call our dot init becuase we want the browser to be ready before our app starts


	$('form').on('click', function(event){

		event.preventDefault();
		$('header').slideUp("slow");  
	});


});