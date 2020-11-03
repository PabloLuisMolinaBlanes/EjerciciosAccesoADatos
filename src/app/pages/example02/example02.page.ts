import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-example02',
  templateUrl: './example02.page.html',
  styleUrls: ['./example02.page.scss'],
})
export class Example02Page implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
  document.getElementById("text").style.visibility = "hidden";
  }
  button() {
  if (document.getElementById("text").style.visibility === "visible") {
    document.getElementById("text").style.visibility = "hidden";
  } else {
    document.getElementById("text").style.visibility = "visible";
  }
  if (document.getElementById("button").innerHTML === "Muestra nombre") {
     document.getElementById("button").innerHTML = "Limpia pantalla";
  } else {
     document.getElementById("button").innerHTML = "Muestra nombre";
  }
}
}
