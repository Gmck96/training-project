import { Component,OnInit } from '@angular/core';
import { WebcamImage} from "ngx-webcam";
import {Router,ActivatedRoute,ParamMap} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(private route: ActivatedRoute) {

  }

  title = 'Training-Project';
}
