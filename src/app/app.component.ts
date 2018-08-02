import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' BASIC app ';
  version:number = 6;
  dataInput:any="";
  submitted(){
    alert(this.title +" with version number "+ this.version +" has submitted data")
  };
}
