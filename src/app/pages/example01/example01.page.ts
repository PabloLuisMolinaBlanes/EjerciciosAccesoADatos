import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-example01',
  templateUrl: './example01.page.html',
  styleUrls: ['./example01.page.scss'],
})
export class Example01Page implements OnInit {
text: HTMLElement;
  constructor() { }

  ngOnInit() {

  }
  ngAfterContentInit() {
  document.getElementById("text").style.visibility = "hidden";
  }
  buttonShow() {
  document.getElementById("text").style.visibility = "visible";
  }
  buttonHide() {
  document.getElementById("text").style.visibility = "hidden";
  }
}
