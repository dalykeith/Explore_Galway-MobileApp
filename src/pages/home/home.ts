import { Component } from '@angular/core';

//Unused import: 'NavController' by terminal 
//import { NavController } from 'ionic-angular';

//toast pop up message (app info)
import { ToastController } from 'ionic-angular';

//This is not needed after the firebase implementation as the photo is stored online 
//Importing photo file 
//import { Photo } from './../photo';

//Native ionic camera 
import { Camera } from 'ionic-native';

//pulling in firebase
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;
  name: string;
  
  //test
  //public base64Image: string;
  
  //this is not used with the new implementation with firebase
  //photos: Photo [] = [new Photo('', 0)];
  photos: FirebaseListObservable<any[]>;

  //private AngularFire and public toast 
//constructor(public toastCtrl: ToastController, af: AngularFire) {}
constructor(private af: AngularFire, public toastCtrl: ToastController) { }

  //old code
  // constructor(public navCtrl: NavController) {
  //   //public navCtrl: NavController
  // }
  
//Toast button
showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Tap the Camera button at the bottom! Capture a snappable pint, coffee, ice-cream, street view, sunset or anything you find intresting on your time here and save it in the Memory Bank!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
 

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photos = this.af.database.list('/photos');
  }


  takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 250,
      targetWidth: 250,
      correctOrientation: true
    }).then((imageData) => {
      // imageData is a base64 encoded string
  //let base64Image = 'data:image/jpeg;base64,' + imageData;
       // this.base64Image = "data:image/jpeg;base64," + imageData;
      //  this.base64Image = "data:image/jpeg;base64," + imageData;
       //this.photos.push(new Photo("data:image/jpeg;base64," + imageData, 0));
       this.photos.push({ src: "data:image/jpeg;base64," + imageData, likes: 0 });
    }, (err) => {
      console.log(err);
    });
  }


  //deleting photo x 1 per click
    // deletePhoto(photo){
    //   this.photos.splice(this.photos.indexOf(photo), 1);
      deletePhoto(photoKey: string) {
    this.photos.remove(photoKey);
    }
  //liking photo x times 
    // likePhoto(photo){
    //   photo.likes++;
      likePhoto(photoKey, likes: number) {
    this.photos.update(photoKey, { likes: likes + 1})
  }
  

  }


