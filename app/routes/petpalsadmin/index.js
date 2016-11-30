import Ember from 'ember';
export default Ember.Route.extend({


model() {
  return this.store.createRecord('blog-post');
},

actions: {
  savePost(newPost) {
    newPost.save().then(() => this.transitionTo('petpalsadmin.indexedit'));
  },

  // upload(e) {
  //   var uploader = getElementById('uploader');
  //   var fileButton = getElementById('fileButton');
  //
  //   var file = e.target.files[0];
  //
  //   var storageRef = firebase.storage().ref('teamImage/' + file.name);
  //
  //    var task = storageRef.put(file);
  //
  //    var imgRef = storageRef;
  //
  //
  // },

  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controller.get('model').rollbackAttributes();
  },


  }
});
