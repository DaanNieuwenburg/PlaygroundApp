import { Component , ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { PlaygroundsPage } from '../playgroundspage/playgroundspage';

declare var google;

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
options : GeolocationOptions;
currentPos : Geoposition;
places:Array<any>;
@ViewChild('map') mapElement: ElementRef;
locations:any;
map: any;

createMarker(place)
{
  //console.log(this.places);
    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: place.geometry.location
    });
}

getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos;

        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    })
}
addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);
    console.log(lat + " " + long);
    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    for (var _i = 0; _i < this.locations.length; _i++) {
    this.addCustomMarker(this.locations[_i]);
    }
    this.addMarker();


}
// Add current position marker to map
addMarker(){

    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });

}
showPlaygrounds(){
  this.navCtrl.push(PlaygroundsPage,{locations : this.locations});
}
// Add marker to the map
addCustomMarker(location){
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position:location
    });
    let content = location.content;
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
}
  ionViewDidEnter(){
    this.getUserPosition();
  }
  constructor(public navCtrl: NavController,private geolocation : Geolocation) {
      this.locations = [
           {lat: 52.060342, lng: 4.499068, content: "Speeltuin"},
           {lat: 52.068760, lng:  4.504882, content: "Speeltuin"},
           {lat: 52.064926, lng:  4.510925, content: "Park"},
           {lat: 52.070786, lng: 4.509742, content: "speeltuin"}
       ];
  }
}
