import Ember from 'ember';
export default Ember.Controller.extend({


  //blog image upload

  actions: {
  upload(e) {

    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('blogImage/' + file.name);

    var task = storageRef.put(file).then(function() {

     var imgRef = storageRef;

     imgRef.getDownloadURL().then(function(url) {
       $('.blog-pic').val(url).trigger("change");
       $('.pic').attr('src', url);
     });
     });

  },
}
});
