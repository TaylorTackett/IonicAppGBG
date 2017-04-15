import { Component } from '@angular/core';

import * as nipplejs from 'nipplejs';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'

})

export class StartPage {
  
  stop: string;
  speed: number;

  constructor() {
    this.speed = 0;

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

      this.stop = "STOP";


  }

  speedChange(event){
    console.log("Speed set to " + this.speed + "%.");
    //Add send message
  }

  eStop(event){
    var el = document.getElementById("stopB");
    if (el.textContent == "STOP") {
        el.textContent = "GO";
        el.style.background = "green";
        console.log("Stop!");
    } else {
        el.textContent = "STOP";
        el.style.backgroundColor = "red";
        console.log("Go!");
    }
    //Add send message
  }

}
