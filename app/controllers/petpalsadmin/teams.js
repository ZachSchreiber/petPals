import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
  upload(e) {
    var uploader = $('#uploader');
    var fileButton = $('#fileButton');

    var file = e.target.files[0];

    var storageRef = firebase.storage().ref('teamImage/' + file.name);

    var task = storageRef.put(file);

     var imgRef = storageRef;

     imgRef.getDownloadURL().then(function(url) {
       $('.team-pic').val(url);
       $('.pic').attr('src', 'url');
     });

     task.on('state_changed',
      function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
      },

      function error(err) {

      },

      function complete() {

      }
   );
  },
}
});
