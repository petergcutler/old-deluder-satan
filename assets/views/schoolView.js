var SchoolView = function(school) {
  this.school = school;
  this.$el = $("<div class='school'></div>");
  this.render();

  $(".schools").append(this.$el);
}


// replace: var clickurl = "/schools/" + schoolId + "/health-report"
// var schoolRequest = $.getJSON(clickurl).then(function(response){
//   console.log(response)
//   schoolname = response.name
//   schoolid = response.id
//   schooladdress = response.address
//   schoolriskcat = response.riskCategory
//   schoolcrit = response.numberCritical
//   schoolnoncrit = response.numberNoncritical
// })
// var view = new SchoolView(schoolRequest)
// console.log(schoolname + schoolid + schooladdress)
//
// $("#schoolLabel").html(schoolname)
// $("#addressLabel").html(schooladdress)
// $("#riskLabel").html(schoolriskcat)
// $("#criticalLabel").html(schoolcrit)
// $("#noncriticalLabel").html(schoolnoncrit)



SchoolView.prototype = {
  render: function() {

    var self = this;
    var thisSchool = self.school

    var report = thisSchool.fetchHealthReport()

    console.log(report)

    self.$el.html(self.schoolTemplate(self.school));


  },
  schoolTemplate: function(school) {
    var html = $("<div>");
    // html.append("<p>School id is</p>" + this.school.id + "<p>and the name is</p>" + this.school.name);
    // html.append("<div class='schoolInfo'></div>");
    // html.append("<p>" + school.address + "</p>");
    return(html);
  }
  // toggleSchool: function(schoolDiv) {
  //   var self = this;
  //   if(schoolDiv.children().length ===0){
  //     this.school.fetchHealthReport().then(function(report){
  //       schoolDiv.append("<p>" + self.school.address + "</p>")
  //       schoolDiv.append("<a href='" + report.reportUrl + "'>School Cafeteria Helath Risk Category: " + report.riskCategory + "</a>")
  //       console.log(report);
  //     })
  //   }
  //   schoolDiv.toggle();
  // }
}
