import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//To import NgModel (directive of FormsModule)
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
//Application is a whole considered as module. Independant code.

@NgModule({
  declarations: [ //To include Components, Directives, Pipes
    AppComponent,
    HelloComponentComponent
  ],
  imports: [ //To include Modules, feature modules
    BrowserModule,
    FormsModule
  ],
  providers: [], //To include Services
  bootstrap: [AppComponent] //Main Component
})
export class AppModule { }
