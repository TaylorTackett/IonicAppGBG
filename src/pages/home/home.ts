import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as nipplejs from 'nipplejs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {


  constructor(public navCtrl: NavController) {
  	  
  	  var radius = 100;
  	  var sampleJoystick = {
  	  	mode: 'static',
  	  	position: {
  	  		left: '50%',
  	  		top: '50%'
  	  	},
  	  	size: radius*2,
  	  	color: 'blue'
  	  };

  	  var joystick;
  	  joystick = nipplejs.create(sampleJoystick);


  }

}
