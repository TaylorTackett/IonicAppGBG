import { Component } from '@angular/core';

import * as nipplejs from 'nipplejs';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html'

})

export class StartPage {
  
  stop: string;
  speed: number;
  gesture: string;

  constructor() {
    this.speed = 0;
    this.stop = "STOP";
    this.gesture = "";

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

  move(event){
    if(typeof arguments[0]=='string'){
        // use the argument as a string
        console.log("Move " + arguments[0] + ".");
        //Add send message
    }
  }

}