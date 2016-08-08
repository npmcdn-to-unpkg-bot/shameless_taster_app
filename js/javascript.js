var myApp = {
	newlat: "",
	newlong: "",
	store1LatLng: {
		lat: '',
		lng: ''
	},

};
var map;


myApp.init = function(){

	navigator.geolocation.getCurrentPosition(function(position) {

		myApp.getStore(position.coords.latitude, position.coords.longitude);
		// console.log(position)

		initMap(position.coords.latitude, position.coords.longitude);

		// console.log(myLatLng)
		myApp.newlat = position.coords
		myApp.map.setCenter(myLatLng);
		myApp.marker.setPosition(myLatLng);

	});	

};


// //get store info from api

myApp.getStore = function(userLatitude, userLongitude){	
	// console.log(userLatitude, userLongitude)
	 $.ajax({
	   url: 'https://lcboapi.com/stores?lat=' + userLatitude + '&lon=' + userLongitude,
	   method: 'GET',
		dataType: 'json',
	   headers: { 'Authorization': 'Token MDpiZDViOGEyMi01OTIxLTExZTYtYTJmNC1jMzhkYzMxNmY2Yzc6RU92eVphaDk5UWlpQ1d2cmFseEFsQzl2MFRQSzRybVVVMDVN' },
	   data: {
	   	where: 'has_tasting_bar'
	   }
	 }).then(function(data) {
	   console.log(data.result);

	   myApp.store1LatLng.lat = data.result[0].latitude;
	   myApp.store1LatLng.lng = data.result[0].longitude;
	   console.log(data.result[0].longitude);

	   lcboLocalArray = [data.result[0].latitude, data.result[0].longitude]


	   myApp.lcboLocations = {
	   	userLocal: {
	   		lat: userLatitude,
	   		lng: userLongitude
	   	},
	   	store1: {
	   		lat: data.result[0].latitude,
	   		lng: data.result[0].longitude
	   	},
	   	store1Meta:{
	   		add: data.result[0].address_line_1,
	   		phn: data.result[0].telephone
	   	},
	   	store2: {
	   		lat: data.result[1].latitude,
	   		lng: data.result[1].longitude
	   	},
	   	store2Meta:{
	   		add: data.result[1].address_line_1,
	   		phn: data.result[1].telephone
	   	},
	   	store3: {
	   		lat: data.result[2].latitude,
	   		lng: data.result[2].longitude
	   	},
	   	store3Meta:{
	   		add: data.result[2].address_line_1,
	   		phn: data.result[2].telephone
	   	},
	   	store4: {
	   		lat: data.result[3].latitude,
	   		lng: data.result[3].longitude
	   	},
	   	store4Meta:{
	   		add: data.result[3].address_line_1,
	   		phn: data.result[3].telephone
	   	},
	   	store5: {
	   		lat: data.result[4].latitude,
	   		lng: data.result[4].longitude
	   	},
	   	store5Meta:{
	   		add: data.result[4].address_line_1,
	   		phn: data.result[4].telephone
	   	},
	   	store6: {
	   		lat: data.result[5].latitude,
	   		lng: data.result[5].longitude
	   	},
	   	store6Meta:{
	   		add: data.result[5].address_line_1,
	   		phn: data.result[5].telephone
	   	},
	   	store7: {
	   		lat: data.result[6].latitude,
	   		lng: data.result[6].longitude
	   	},
	   	store7Meta:{
	   		add: data.result[6].address_line_1,
	   		phn: data.result[6].telephone
	   	},
	   	store8: {
	   		lat: data.result[7].latitude,
	   		lng: data.result[7].longitude
	   	},
	   	store8Meta:{
	   		add: data.result[7].address_line_1,
	   		phn: data.result[7].telephone
	   	},
	   	store9: {
	   		lat: data.result[8].latitude,
	   		lng: data.result[8].longitude
	   	},
	   	store9Meta:{
	   		add: data.result[8].address_line_1,
	   		phn: data.result[8].telephone
	   	},
	   	store10: {
	   		lat: data.result[9].latitude,
	   		lng: data.result[9].longitude
	   	},
	   	store10Meta:{
	   		add: data.result[9].address_line_1,
	   		phn: data.result[9].telephone
	   	},
	   	store11: {
	   		lat: data.result[10].latitude,
	   		lng: data.result[10].longitude
	   	},
	   	store11Meta:{
	   		add: data.result[10].address_line_1,
	   		phn: data.result[10].telephone
	   	},
	   	store12: {
	   		lat: data.result[11].latitude,
	   		lng: data.result[11].longitude
	   	},
	   	store12Meta:{
	   		add: data.result[11].address_line_1,
	   		phn: data.result[11].telephone
	   	},
	   	store13: {
	   		lat: data.result[12].latitude,
	   		lng: data.result[12].longitude
	   	},
	   	store13Meta:{
	   		add: data.result[12].address_line_1,
	   		phn: data.result[12].telephone
	   	},
	   	store14: {
	   		lat: data.result[13].latitude,
	   		lng: data.result[13].longitude
	   	},
	   	store14Meta:{
	   		add: data.result[13].address_line_1,
	   		phn: data.result[13].telephone
	   	},
	   	store15: {
	   		lat: data.result[14].latitude,
	   		lng: data.result[14].longitude
	   	},
	   	store15Meta:{
	   		add: data.result[14].address_line_1,
	   		phn: data.result[14].telephone
	   	},
	   	store16: {
	   		lat: data.result[15].latitude,
	   		lng: data.result[15].longitude
	   	},
	   	store16Meta:{
	   		add: data.result[15].address_line_1,
	   		phn: data.result[15].telephone
	   	},

	   }
	   //store the array with all local in here
	  myApp.createMarkers(myApp.lcboLocations);

	});
};

myApp.createMarkers = function(lcboArray){
	// console.log(lcboArray);

	var icon = {
		url: 'http://maps.google.com/mapfiles/ms/micons/purple-dot.png'
	}

	//STORE1



	var contentString1 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
	            +
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store1Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store1Meta.phn + '</p>'
	            '</div>';

    var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
    });

	marker1 = new google.maps.Marker({
        position: lcboArray.store1,
        map: map,
        icon: icon.url
    });

    marker1.addListener('click', function() {
      infowindow1.open(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);


      $.ajax({
      	url: 'https://maps.googleapis.com/maps/api/distancematrix/json?',
      	method: 'GET',
      	dataType: 'jsonp',
      	data: {
      		origin: lcboArray.userLocal,
      		destination: lcboArray.store1,
      		mode: "driving",
      		key: 'AIzaSyDJMTc_5PkuwxHMdPr39Xbc6qMQCju44a8'
      	},
      }).then(function(directions){

      	//we're PASSING this info along to the next function!
      	console.log(directions);
      });

    });

    //STORE2
	var contentString2 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store2Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store2Meta.phn + '</p>'
	            '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });

	marker2 = new google.maps.Marker({
        position: lcboArray.store2,
        map: map,
        icon: icon.url
    });

    marker2.addListener('click', function() {
      infowindow2.open(map, marker2);

      infowindow1.close(map, marker1);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE3
	var contentString3 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store3Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store3Meta.phn + '</p>'
	            '</div>';

    var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
    });

	marker3 = new google.maps.Marker({
        position: lcboArray.store3,
        map: map,
        icon: icon.url
    });

    marker3.addListener('click', function() {
      infowindow3.open(map, marker3);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE4
	var contentString4 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store4Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store4Meta.phn + '</p>'
	            '</div>';

    var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
    });

	marker4 = new google.maps.Marker({
        position: lcboArray.store4,
        map: map,
        icon: icon.url
    });

    marker4.addListener('click', function() {
      infowindow4.open(map, marker4);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE5
	var contentString5 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store5Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store5Meta.phn + '</p>'
	            '</div>';

    var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
    });

	marker5 = new google.maps.Marker({
        position: lcboArray.store5,
        map: map,
        icon: icon.url
    });

    marker5.addListener('click', function() {
      infowindow5.open(map, marker5);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE6
	var contentString6 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store6Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store6Meta.phn + '</p>'
	            '</div>';

    var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
    });

	marker6 = new google.maps.Marker({
        position: lcboArray.store6,
        map: map,
        icon: icon.url
    });

    marker6.addListener('click', function() {
      infowindow6.open(map, marker6);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE7
	var contentString7 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store7Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store7Meta.phn + '</p>'
	            '</div>';

    var infowindow7 = new google.maps.InfoWindow({
      content: contentString7
    });

	marker7 = new google.maps.Marker({
        position: lcboArray.store7,
        map: map,
        icon: icon.url
    });

    marker7.addListener('click', function() {
      infowindow7.open(map, marker7);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE8
	var contentString8 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store8Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store8Meta.phn + '</p>'
	            '</div>';

    var infowindow8 = new google.maps.InfoWindow({
      content: contentString8
    });

	marker8 = new google.maps.Marker({
        position: lcboArray.store8,
        map: map,
        icon: icon.url
    });

    marker8.addListener('click', function() {
      infowindow8.open(map, marker8);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE9
	var contentString9 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store9Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store9Meta.phn + '</p>'
	            '</div>';

    var infowindow9 = new google.maps.InfoWindow({
      content: contentString9
    });

	marker9 = new google.maps.Marker({
        position: lcboArray.store9,
        map: map,
        icon: icon.url
    });

    marker9.addListener('click', function() {
      infowindow9.open(map, marker9);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE10
	var contentString10 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store10Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store10Meta.phn + '</p>'
	            '</div>';

    var infowindow10 = new google.maps.InfoWindow({
      content: contentString10
    });

	marker10 = new google.maps.Marker({
        position: lcboArray.store10,
        map: map,
        icon: icon.url
    });

    marker10.addListener('click', function() {
      infowindow10.open(map, marker10);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE11
	var contentString11 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store11Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store11Meta.phn + '</p>'
	            '</div>';

    var infowindow11 = new google.maps.InfoWindow({
      content: contentString11
    });

	marker11 = new google.maps.Marker({
        position: lcboArray.store11,
        map: map,
        icon: icon.url
    });

    marker11.addListener('click', function() {
      infowindow11.open(map, marker11);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE12
	var contentString12 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store12Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store12Meta.phn + '</p>'
	            '</div>';

    var infowindow12 = new google.maps.InfoWindow({
      content: contentString12
    });

	marker12 = new google.maps.Marker({
        position: lcboArray.store12,
        map: map,
        icon: icon.url
    });

    marker12.addListener('click', function() {
      infowindow12.open(map, marker12);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE13
	var contentString13 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store13Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store13Meta.phn + '</p>'
	            '</div>';

    var infowindow13 = new google.maps.InfoWindow({
      content: contentString13
    });

	marker13 = new google.maps.Marker({
        position: lcboArray.store13,
        map: map,
        icon: icon.url
    });

    marker13.addListener('click', function() {
      infowindow13.open(map, marker13);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE14
	var contentString14 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store14Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store14Meta.phn + '</p>'
	            '</div>';

    var infowindow14 = new google.maps.InfoWindow({
      content: contentString14
    });

	marker14 = new google.maps.Marker({
        position: lcboArray.store14,
        map: map,
        icon: icon.url
    });

    marker14.addListener('click', function() {
      infowindow14.open(map, marker14);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow15.close(map, marker15);
      infowindow16.close(map, marker16);
    });

    //STORE15
	var contentString15 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store15Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store15Meta.phn + '</p>'
	            '</div>';

    var infowindow15 = new google.maps.InfoWindow({
      content: contentString15
    });

	marker15 = new google.maps.Marker({
        position: lcboArray.store15,
        map: map,
        icon: icon.url
    });

    marker15.addListener('click', function() {
      infowindow15.open(map, marker15);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow16.close(map, marker16);
    });

    //STORE16
	var contentString16 = '<div id="content">'+
				`<h6><i class="fa fa-glass" aria-hidden="true"></i></h6>`
				+
	            '<p>LCBO</p>'
	            +
	            '<p>' + lcboArray.store16Meta.add + '</p>'
	            +
	            '<p>' + lcboArray.store16Meta.phn + '</p>'
	            '</div>';

    var infowindow16 = new google.maps.InfoWindow({
      content: contentString16
    });

	marker16 = new google.maps.Marker({
        position: lcboArray.store16,
        map: map,
        icon: icon.url
    });

    marker16.addListener('click', function() {
      infowindow16.open(map, marker16);

      infowindow1.close(map, marker1);
      infowindow2.close(map, marker2);
      infowindow3.close(map, marker3);
      infowindow4.close(map, marker4);
      infowindow5.close(map, marker5);
      infowindow6.close(map, marker6);
      infowindow7.close(map, marker7);
      infowindow8.close(map, marker8);
      infowindow9.close(map, marker9);
      infowindow10.close(map, marker10);
      infowindow11.close(map, marker11);
      infowindow12.close(map, marker12);
      infowindow13.close(map, marker13);
      infowindow14.close(map, marker14);
      infowindow15.close(map, marker15);
    });
}


function initMap(lat, long) {
		var styleArray = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#716464"},{"weight":"0.01"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"},{"color":"#a05519"},{"saturation":"-13"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#84afa3"},{"lightness":52}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"}]}]

		var myLatLng = {
			lat: lat,
			lng: long
			// lat: 44.648201, 
			// lng: -79.3978944
		};

		// LOCATION GRAB ATTEMPT


		//LOCATION ATTEMPOT END

        // Create a map object and specify the DOM element for display.
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          disableDefaultUI: true,
          scrollwheel: true,
          styles: styleArray,
          zoom: 13
        });

        var icon = {
        	url: 'https://storage.googleapis.com/support-kms-prod/SNP_2752125_en_v0'
        }

        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: 'Hello World!',
          icon: icon.url
        });

  //       var store1LatLng = {
		// 	lat: 43.6476,
		// 	lng: -79.4015
		// };

        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: myApp.store1LatLng,
        //   title: 'Hello World!'
        // });


        //STORE 1
   //      var marker = new google.maps.Marker({
   //        map: map,
   //        position: {
			// lat: 43.6548,
			// lng: -79.3985
			// },
   //        title: 'Hello World!'
   //      });

        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: myApp.store3LatLng,
        //   title: 'Hello World!'
        // });

        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: myApp.store4LatLng,
        //   title: 'Hello World!'
        // });

        // console.log("hello");

}	

      


$(function(){
	//we call our dot init becuase we want the browser to be ready before our app starts
	myApp.init();

	$('form').on('click', function(event){

		event.preventDefault();
		$('header').slideUp("slow");  
	});

});