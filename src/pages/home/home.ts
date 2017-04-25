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

    this.controller = "n";

  }

  getSelectedController(event){
    console.log(this.controller);
  }

  goToNextPage(event) {
    // send message here!!
    this.navCtrl.push(StartPage);
  }

}
