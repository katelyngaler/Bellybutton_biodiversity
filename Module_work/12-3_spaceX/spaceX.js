const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// get Air Foce Base name only:
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// latitude:
// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// lat and long of each lauch station

// didn't work
// var data = d3.json(url);
// var lat = data.map(function(loc){
//     return loc[0].location.latitude;
// });
// var lon = data.map(function(loc){
//     return loc[0].location.longitude;
// });

d3.json(url).then(receivedData => console.log(receivedData.map(function(loc){
    console.log(loc.location.latitude, loc.location.longitude);
})));

