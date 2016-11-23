import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  upload(event) {
    const reader = new FileReader();
    const file = event.target.files[0];
    let imageData;

    reader.onload = () => {
      imageData = reader.result;
      this.set('data.image', imageData);

      // additional logics as you wish
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  },
}
});
