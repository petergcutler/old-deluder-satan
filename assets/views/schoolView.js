var SchoolView = function(school) {
  this.school = school;
  this.$el = $("<div class='school'></div>");
  this.render();

  $(".schools").append(this.$el);
}

SchoolView.prototype = {
  render: function() {

    var self = this;

    $("#schoolLabel").html(self.school.name)
    $("#addressLabel").html(self.school.address)

    self.school.fetchHealthReport().then(function(report){
      console.log(report)
      $("#riskLabel").html(report.riskCategory)
      $("#criticalLabel").html(report.numberCritical)
      $("#noncriticalLabel").html(report.numberNoncritical)
    })

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
