$(document).ready(function() {
  School.fetch().then(function(schools){
    schools.forEach(function(school){
      var url = "https://api.mapbox.com/v4/geocode/mapbox.places/" + school.address + ", Washington, District of Columbia.json?proximity=-77,38.9&access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImJkN2FkOTFjNDM4OGQzNWUyYzY3NjU4ODM4ZDYwNDJmIn0.FLniij4ORShXSqRe6pcw-A"
      $.getJSON(url).then(function(response){
        var schoolMapList = L.mapbox.featureLayer({
            type: 'Feature',
            geometry: {
                type: 'Point',
                // lon, lat
                coordinates: [
                  response.features[0].center[0],
                  response.features[0].center[1]
                ]
            },
            properties: {
                title: school.name,
                description: school.address,
                identity: school.id,
                testdisplay: "this is a test",
                'marker-size': 'small',
            }
        })
        .addTo(map);

        schoolMapList.on('click', function(e){
          var schoolId = e.layer.feature.properties.identity
          var url = "/schools/" + schoolId
          var schoolRequest = $.getJSON(url).then(function(response){
            schoolname = response.name
            schoolid = response.id
            schooladdress = response.address
          })
          var view = new SchoolView(schoolRequest)
          console.log(schoolname + schoolid + schooladdress)

          // console.log(e.layer.feature.properties.title)
          // console.log(e.layer.feature.properties.identity)
          $(".one-school-name").html(schoolname)
          $(".one-school-address").html(schooladdress)
        })
      })
    })
  })

  L.mapbox.accessToken = 'pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImJkN2FkOTFjNDM4OGQzNWUyYzY3NjU4ODM4ZDYwNDJmIn0.FLniij4ORShXSqRe6pcw-A';
  var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([38.90, -77.01], 12);
});
