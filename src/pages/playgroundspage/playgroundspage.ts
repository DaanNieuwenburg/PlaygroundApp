import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlaygroundspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playgroundspage',
  templateUrl: 'playgroundspage.html',
})
export class PlaygroundsPage {
locations:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.locations = this.navParams.get("locations");
    console.log(this.locations);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaygroundsPage');
  }

}
