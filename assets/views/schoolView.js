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
    self.school.fetchComments().then(function(comments){
      self.appendComments(comments);
    })
  },
  appendComments: function(comments) {
    var commentDiv = $("<div class='comment'></div>");
    comments.forEach(function(comment){
      var commentView = new CommentView(comment);
      // commentView.render();
    })
  }
}
