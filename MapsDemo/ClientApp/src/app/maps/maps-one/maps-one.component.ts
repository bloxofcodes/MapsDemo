import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-maps-one',
  templateUrl: './maps-one.component.html',
  styleUrls: ['./maps-one.component.css']
})

export class MapsOneComponent implements AfterViewInit {

  imgMap1: string = "/assets/images/sg-map-1-gray.png";
  imgMap2: string = "/assets/images/sg-map-2-gray.png";

  pin1: string = "/assets/images/pin.png";

  ngAfterViewInit() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }


}
