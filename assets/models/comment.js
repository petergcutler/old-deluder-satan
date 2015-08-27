var Comment = function(info){
  this.body = info.body;
  this.userId = info.userId;
  this.schoolId = info.schoolId;
  this.createdAt = info.createdAt;
};

// Comment.fetch = function() {
//   var request = $.getJSON('/comments/' + self.)
//     .then(function(response) {
//       var comments = [];
//       for(var i=0; i<response.length; i++) {
//         comments.push(new Comment(response[i]));
//       }
//       return comments;
//     })
//     .fail(function(response){
//       console.log("JS failed to load");
//     });
//     return request;
// };
//
// Comment.create = function(commentData) {
//   var self = this;
//
//   var url = "/comments";
//   var request = $.ajax({
//     url: url,
//     method: "post",
//     data: JSON.stringify(commentData),
//     contentType: "application/json"
//   }).then(function(commentData) {
//     return new Comment(commentData);
//   });
//   return request;
// };
//
// Comment.prototype = {
//   destroy: function() {
//     var url = "comments/" + this.id;
//     var request = $.ajax({
//       url: url,
//       method: "delete"
//     });
//     return request;
//   },
//   reload: function(newData){
//     for(var attrname in newData) {
//       this[attrname] = newData[attrname];
//     }
//   }
// };
