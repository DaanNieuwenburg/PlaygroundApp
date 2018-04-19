import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-playgroundspage',
  templateUrl: 'playgroundspage.html',
})
export class PlaygroundsPage {
locations:Array<any>;
from:any;
dest:any;
index:any;

// Calculate the distance between 2 points
calculateDistance(lat1:number,lat2:number,long1:number,long2:number){
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    console.log(dis + " km");
    return dis;
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locations = this.navParams.get("locations");
    let user = this.navParams.get("user");
    console.log(this.locations);
    // Calc distance for each location
    for(var i = 0; i < this.locations.length; i++){
      this.locations[i].distance = this.calculateDistance(user.latitude, this.locations[i].lat, user.longtitude, this.locations[i].lng).toFixed(2) + "km";
    }
    // Sort on distance
    this.locations.sort((a, b) => a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaygroundsPage');
  }

}
