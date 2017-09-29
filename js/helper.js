var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h3 class="white-text">%data%</h3>';
var HTMLheaderDescription = '<div class="selfIntroduction"></div>';
var HTMLselfIntroduction = '<p>%data%</p>';
var HTMLothers = '<p>%data%</p>';

var HTMLbioPic = '<img src="%data%" alt="biopic" class="biopic">';

var HTMLcontactGeneric = '<ul class="contact-entry"></ul>';
var HTMLlocation = '<li class="location"><img src="images/icons/location.svg" class="svg" /><span class="bold-item">%data%</span></li>';
var HTMLmobile = '<li class="mobile"><img src="images/icons/tel.svg" class="svg" /><span class="bold-item">%data%</span></li>';
var HTMLemail = '<li class="email"><img src="images/icons/mail.svg" class="svg" /><span class="bold-item">%data%</span></li>';
var HTMLlinkedin = '<li class="linkedin"><img src="images/icons/linkedin.svg" class="svg" /><span class="bold-item">%data%</span></li>';

var HTMLworkStart = '<ul><li class="work-entry"></li></ul>';
var HTMLworkTitle = '<h3 class="title-text">%data%</h3>';
var HTMLworkEmployer = '<p class="employer-text">%data%</p>';
var HTMLworkDates = '<p class="date-text">%data%</p>';
var HTMLcompanyIntro = '<p class="companyIntro-text">%data%</p>';
var HTMLworkDescripition = '<p class="workDescripition-text">%data%</p>';
var HTMLmainResponsibility = '<p class="mainResponsibility">%data%</p>';


var HTMLschoolStart = '<ul><li class="education-entry"></li></ul>';
var HTMLschoolName = '<h3 class="list">%data%</h3>';
var HTMLschoolCollecge = '<p class="college-text">%data%</p>';
var HTMLschoolDates = '<p class="date-text">%data%</p>';
var HTMLschoolDegree = '<p class="degree-text">%data%</p>';
var HTMLschoolMajor = '<span class="major-text"> - %data%</span>';

var HTMLonlineClasses = '<h4>Online Classes</h4>';
var HTMLonlineStart = '<ul><li class="onlinecourse-entry"></li></ul>';
var HTMLonlineTitle = '<a href="#" class="onlineCourses">%data%</a>';
var HTMLonlineSchool = '<p class="school-text">%data%</p>';
var HTMLonlineDates = '<p class="date-text">%data%</p>';

var HTMLskillsMap = '<img src="%data%" alt="skillmap" class="map"/>';
var HTMLprofessionStart = '<h3 id="profession">Professional Skills</h3><ul id="profession" class="skills"></ul>';
var HTMLprofessionalSkills = '<li>%data%</li>';
var HTMLcapabilityStart = '<h3 id="capability">Capabilities</h3><ul id="capability" class="skills"></ul>';
var HTMLcapabilities = '<li>%data%</li>';

var HTMLhonorStart = '<ul><li class="honor-entry"></li></ul>';
var HTMLhonorlName = '<h3 class="list">%data%</h3>';
var HTMLhonorDates = '<p class="date-text">%data%</p>';
var HTMLhonorDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<span>%data%</span>';
var HTMLprojectImage = '<img src="%data%">';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function() {};
    $name.html(iName);
  });
});

var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y)
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#mapDiv'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job) {
      locations.push(job.location);
    });

    work.internship.forEach(function(job) {
      locations.push(job.location);
    });

    return locations;
  };

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infowindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  };

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place) {
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
