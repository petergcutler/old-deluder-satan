var SchoolView = function(school) {
  this.school = school;
  this.$el = $("<div class='school'></div>");
  this.render();

  $(".schools").append(this.$el);
}

SchoolView.prototype = {
  render: function() {
    var self = this;

    self.$el.html(self.schoolTemplate(self.school));

    var schoolLink = self.$el.find(".showSchool");
    var schoolDiv = self.$el.find("div.schoolInfo");

    schoolDiv.hide(); // hide empty element

    schoolLink.on("click", function() {
      event.preventDefault();
      console.log("schoolLink clicked")
      self.toggleSchool(schoolDiv);
    })
  },
  schoolTemplate: function(school) {
    console.log("rendering tempalate");
    var html = $("<div>");
    html.append("<a href='/schools/" + school.id + "' class='showSchool'><h3>" + school.name + "</h3></a>");
    html.append("<div class='schoolInfo'></div>");
    // html.append("<p>" + school.address + "</p>");
    return(html);
  },
  toggleSchool: function(schoolDiv) {
    var self = this;
    if(schoolDiv.children().length ===0){
      this.school.fetchHealthReport().then(function(report){
        schoolDiv.append("<p>" + self.school.address + "</p>")
        schoolDiv.append("<a href='" + report.reportUrl + "'>School Cafeteria Helath Risk Category: " + report.riskCategory + "</a>")
        console.log(report);
      })
    }
    schoolDiv.toggle();
  }
}
