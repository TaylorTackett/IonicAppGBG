import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StartPage } from '../start/start';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {

  controller: string;

  constructor(public navCtrl: NavController) {
    console.log("Loaded!!");

  }

  openPage() {
    // navigate to the new page if it is not the current page
    this.navCtrl.push(StartPage);
  }

  goToNextPage(event) {
    this.navCtrl.push(StartPage);
  }

  show(event) {
    console.log("Pressed a button!!");
  }

}
