import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-example04',
  templateUrl: './example04.page.html',
  styleUrls: ['./example04.page.scss'],
})
export class Example04Page implements OnInit {
  saludo: String = "";
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(){
  document.getElementById("saludo").style.visibility = "hidden";
  }
  saludar() {
  this.saludo = document.getElementById("inputtage").nodeValue;
  document.getElementById("saludo").style.visibility = "visible";
  }
}
