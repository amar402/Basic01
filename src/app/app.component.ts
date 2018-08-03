import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' BASIC app ';
  version:number = 6.0 ; 
  constructor(private router:Router){

  }
  

  ngOnInit() {
  }
  gotoRegister(){
    this.router.navigate(['/register'])
  }
  gotoRecords(){
    this.router.navigate(['/records'])
  }
  gotoHome(){
    this.router.navigate(['/home'])
  }
}
