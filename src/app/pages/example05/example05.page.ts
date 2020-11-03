import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-example05',
  templateUrl: './example05.page.html',
  styleUrls: ['./example05.page.scss'],
})
export class Example05Page implements OnInit {
value: number = 0;
min: number;
max: number;
  constructor() { }

  ngOnInit() {
  }
  genRandom() {
  this.value = Math.round(Math.random()*(this.max-this.min))+this.min;
  }
}
