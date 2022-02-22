import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-page',
  templateUrl: './final-page.component.html',
  styleUrls: ['./final-page.component.css']
})
export class FinalPageComponent implements OnInit {

  pageTitle: string = 'App Final Page';
  private ImagePath: string;

  constructor() {
    this.ImagePath = '/assets/images/ThankYou.jpeg'
  }

  ngOnInit(): void {
  }

}
