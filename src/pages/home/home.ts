import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//toast pop up message
import { ToastController } from 'ionic-angular';

//Importing photo file 
import { Photo } from './../photo';
//Native ionic camera 
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image: string;
  name: string;
  
  //test
  //public base64Image: string;
constructor(public toastCtrl: ToastController) {}
  // constructor(public navCtrl: NavController) {
  //   //public navCtrl: NavController

  // }
  // photo place holder
showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Tap the Camera button at the bottom! Capture a snappable pint, coffee, ice-cream, street view, sunset or anything you find intresting on your time here and save it in the Memory Bank!',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }



  photos: Photo [] = [new Photo('', 0)];
  // = [new Photo('https://placehold.it/350/150', 5), new Photo('https://placehold.it/350/150', 5)]
  //testing fake image holders for placement  

  takePhoto() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth: 500,
      correctOrientation: true
    }).then((imageData) => {
      // imageData is a base64 encoded string
  //let base64Image = 'data:image/jpeg;base64,' + imageData;
       // this.base64Image = "data:image/jpeg;base64," + imageData;
      //  this.base64Image = "data:image/jpeg;base64," + imageData;
       this.photos.push(new Photo("data:image/jpeg;base64," + imageData, 0));
    }, (err) => {
      console.log(err);
    });
  }


  //deleting photo x 1 per click
    deletePhoto(photo){
      this.photos.splice(this.photos.indexOf(photo), 1);
    }
  //liking photo x times 
    likePhoto(photo){
      photo.likes++;
  }

  }


