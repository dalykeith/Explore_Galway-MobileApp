import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

// pulling in different pages from all connected created pages 
import { CoffeePage } from '../coffee/coffee';
import { FoodPage } from '../food/food';
import { DrinksPage } from '../drinks/drinks';
import { WalksPage } from '../walks/walks';
import { ShoppingPage } from '../shopping/shopping';

// Diary page in top corner (left/right depending on device)
import { DiaryPage } from '../diary/diary';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  //if Coffee button in the list is pushed go to CoffeePage
    launchCoffeePage() {
      this.navCtrl.push(CoffeePage);
    }
  //if Food button in the list is pushed go to FoodPage
    launchFoodPage() {
      this.navCtrl.push(FoodPage);
    }
    launchDrinksPage() {
      this.navCtrl.push(DrinksPage);
    }
    launchWalksPage() {
      this.navCtrl.push(WalksPage);
    }
    launchShoppingPage() {
      this.navCtrl.push(ShoppingPage);
    }
    launchDiaryPage(){
      this.navCtrl.push(DiaryPage);
    }

}
