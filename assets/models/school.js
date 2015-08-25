var School = function(info) {
  this.name = info.name;
  this.address = info.address;
  this.id = info.id;
}

School.fetch = function() {
  var request = $.getJSON('/schools')
    .then(function(response) {
      var schools = [];
      for(var i=0; i<response.length; i++) {
        schools.push(new School(response[i]));
      }
      return schools;
    })
    .fail(function(response){
      console.log("JS failed to load");
    });
    return request;
};

School.prototype = {
  fetchHealthReport: function() {
    var url = '/schools/' + this.id + '/health-report';
    var request = $.getJSON(url)
      .then(function(response){
        var healthReport = response;
        // for(var i=0; i<response.length; i++) {
        //   healthReports.push(new HealthReport(response[i]));
        // }
        return healthReport;
      })
      .fail(function(response){
        console.log("JS failed to load");
      })
    return request;
  }
}
