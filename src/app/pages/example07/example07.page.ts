import { Component, Input, OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-example07',
  templateUrl: './example07.page.html',
  styleUrls: ['./example07.page.scss'],
})
export class Example07Page implements OnInit {
euros: number;
pesetas: number;

  constructor() { }
 
  ngOnInit() {
  this.euros = 0;
  this.pesetas = 0;
  }
  aEuros() {
  this.pesetas = this.euros * 166;
  }
  aPesetas() {
  this.euros = this.pesetas / 166;
  }

}
