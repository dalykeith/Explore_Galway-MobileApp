import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { CoffeePage } from '../pages/coffee/coffee';
import { FoodPage } from '../pages/food/food';
import { DrinksPage } from '../pages/drinks/drinks';
import { WalksPage } from '../pages/walks/walks';
import { ShoppingPage } from '../pages/shopping/shopping';

import { DiaryPage } from '../pages/diary/diary';

 import { AngularFireModule } from 'angularfire2';
// export const firebaseConfig = {
  var config = {
    apiKey: "AIzaSyCj9cmveNq1XpQquN7dw3VGZSsa1BOyP8s",
    authDomain: "madapp-75a8b.firebaseapp.com",
    databaseURL: "https://madapp-75a8b.firebaseio.com",
    storageBucket: "madapp-75a8b.appspot.com",
    messagingSenderId: "39345576965"
  };  


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CoffeePage,
    FoodPage,
    DrinksPage,
    WalksPage,
    ShoppingPage,
    DiaryPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CoffeePage,
    FoodPage,
    DrinksPage,
    WalksPage,
    ShoppingPage,
    DiaryPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
