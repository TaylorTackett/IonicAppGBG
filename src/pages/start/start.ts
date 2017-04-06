import { Component } from '@angular/core';

import * as nipplejs from 'nipplejs';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'

})
export class StartPage {

  toggleItems: any[];

  constructor() {

	  this.toggleItems = [
	   { id: "keyboard", value: true},
	   { id: "joystick", value: false}
	  ];

  	  var radius = 100;
  	  var sampleJoystick = 
  	    {
  	  	mode: 'static',
  	  	position: {
  	  		left: '50%',
  	  		top: '70%'
  	  	},
  	  	size: radius*2,
  	  	color: 'blue'
  	  };

  	  var joystick;
  	  joystick = nipplejs.create(sampleJoystick);


  }

  toggle(item){
    alert(item.id + " changed to " + item.value);

  }

}
