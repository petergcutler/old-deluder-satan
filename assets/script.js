$(document).ready(function() {
  console.log("loading")
  School.fetch().then(function(schools){
    schools.forEach(function(school){
      var view = new SchoolView(school);
      view.render();
    })
  })
});
