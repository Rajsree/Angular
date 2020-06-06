import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.css']
})
export class HelloComponentComponent implements OnInit {

  myVariable = "SatheshRaji";
  bitwiseOR = 2 | 5 // -> 10 | 101 -> 111 (7)
  i=0;
  functionCallCheck () {
    console.log('Called'+  this.i++ +'times!!')
  }
  constructor() { }

  ngOnInit() {
  }

}
