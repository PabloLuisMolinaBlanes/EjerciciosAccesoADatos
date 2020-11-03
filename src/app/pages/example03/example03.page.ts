import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example03',
  templateUrl: './example03.page.html',
  styleUrls: ['./example03.page.scss'],
})
export class Example03Page implements OnInit {
num: number = 0;
  constructor() { }

  ngOnInit() {

  }
add() {
this.num += 1;
}
sub() {
this.num -= 1;
}
reset() {
this.num = 0;
}
}
