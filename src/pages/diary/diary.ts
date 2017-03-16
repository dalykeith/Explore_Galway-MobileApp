import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { AngularFire, FirebaseListObservable } from 'angularfire2';

/*
  Generated class for the Diary page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-diary',
  templateUrl: 'diary.html'
})
export class DiaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiaryPage');
  }

}
