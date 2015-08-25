$(document).ready(function() {
  console.log("loading")
  School.fetch().then(function(schools){
    schools.forEach(function(school){
      var view = new SchoolView(school);
      view.render();
    })
  })

  L.mapbox.accessToken = 'pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImJkN2FkOTFjNDM4OGQzNWUyYzY3NjU4ODM4ZDYwNDJmIn0.FLniij4ORShXSqRe6pcw-A';
  var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([38.90, -77.01], 12);

});
