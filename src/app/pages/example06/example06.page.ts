import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-example06',
  templateUrl: './example06.page.html',
  styleUrls: ['./example06.page.scss'],
})
export class Example06Page implements OnInit {
gato: HTMLElement;
numberId: number = 1;
  constructor() { }

  ngOnInit() {

  }
  ngAfterContentInit() {
  this.gato = document.getElementById("gato");
  document.getElementById("fin").style.visibility = "hidden";
  console.log(this.gato);

  }
  changePos() {
  document.getElementById("" + this.numberId).append(this.gato);
  if (this.numberId === 5){
    this.gato.style.visibility = "hidden";
    document.getElementById("fin").style.visibility = "visible";
  }
  this.numberId += 1;
  }

}
