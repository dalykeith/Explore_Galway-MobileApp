import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// This shows that I have made the command to generate a new page 

/*
  Generated class for the Coffee page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  //component connections
  selector: 'page-coffee',
  templateUrl: 'coffee.html'
})
export class CoffeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoffeePage');
  }

}
