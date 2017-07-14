import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coords;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    this.getCurrentPosition();
  }

  setLongitude(longitude) {
    (<any> this.geolocation).setLongitude(longitude);
  }

  setLatitude(latitude) {
    (<any>this.geolocation).setLatitude(latitude);
  }

  getCurrentPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.coords = resp.coords;
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
}
