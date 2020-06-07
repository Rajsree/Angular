import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  records = [{
  name:"rahul",
  age:27},
  {
  name:"Raj",
  age:23
  },
  {
    name:"rahul",
    age:27},
    {
    name:"Raj",
    age:23
    },
  {
    name:"rahul",
    age:27},
    {
    name:"Raj",
    age:23
  }]
}
