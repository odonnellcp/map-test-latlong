import Controller from '@ember/controller';

export default Controller.extend({
  updateCheck: '',
  locCoordinates: '',
  locGive: '',
  locName: '',
  latitude: '',
  longitude: '',
  lat: 33.876118,
  lng: -117.921410,
  zoom: 13,

  actions: {
    updateMap(){
      this.set('lat', this.get('latitude'));
      this.set('lng', this.get('longitude'));
      this.set('locName', this.get('locGive'));
      this.set('locGive', '');
      this.set('latitude', '');
      this.set('longitude', '');
      this.set('updateCheck', 'true');
      this.set('locCoordinates', [this.get('lat'), this.get('lng')]);
      this.set('zoom', 20);
    }
  }
});
