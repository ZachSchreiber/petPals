import Ember from 'ember';
export default Ember.Route.extend({


model() {
  return this.store.createRecord('blog-post');
},

actions: {
  savePost(newPost) {
    newPost.save().then(() => this.transitionTo('petpalsadmin.indexedit'));
  },

  fetchDate() {
    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();
    var monthDate = month + day + year;
    $(".blog-date").val(month + "/" + day + "/" + year).trigger("change");
  },

  upload(e) {
    var uploader = getElementById('uploader');
    var fileButton = getElementById('fileButton');

    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('teamImage/' + file.name);

     var task = storageRef.put(file);

     var imgRef = storageRef;


  },

  }
});
