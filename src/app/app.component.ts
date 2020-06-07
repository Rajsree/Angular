import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  TryBinding = 'app'
  mydisabledValue = false
  constructor () {
  this.TryBinding = ""
  this.mydisabledValue = false;
  setInterval (() => {
    this.TryBinding = Math.random().toString();
    this.mydisabledValue = Math.random() > 0.5;
  }, 500);

  }



  submitFunction() {
  this.mydisabledValue=!this.mydisabledValue;
  alert("Function called. Changing mode! -"+ this.mydisabledValue);
  }

  //Demonstrating 2way data biniding
  twowaytext = "initial Value"
  twowayDemo(e) {
    console.log(e.target.value);
    this.twowaytext = e.target.value;
  }

  ngDemotext = "ngDemotext"
}
