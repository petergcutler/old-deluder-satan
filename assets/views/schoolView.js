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

  }

}
