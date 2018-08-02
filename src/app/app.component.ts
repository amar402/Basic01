import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' BASIC app ';
  version:number = 6.0 ;
  person ={'Langauages':[]};
  gender;
  eng;fr;frs;
  checkedVal= [] ;
  submitted(){
    alert(this.title +" with version number "+ this.version +" has submitted data")
  };
  onSelection(val){
    this.gender = val
  }
  onCheck(event:any){
    
    if(event.currentTarget.checked){
      this.checkedVal.push(event.currentTarget.name)     
    }else if(this.checkedVal.indexOf(event.currentTarget.name)>-1){
      let i = this.checkedVal.indexOf(event.currentTarget.name)
      this.checkedVal.splice(i,1)     
    }
    this.person.Langauages = this.checkedVal;
  }
}
