import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title= 'Register Component ';
  version='Routing';
  person ={'Langauages':[]};
  gender;
  eng;fr;frs;
  checkedVal= [] ;
  submitted(){
    alert(this.title +" with  "+ this.version +" has submitted data")
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
  constructor() { }

  ngOnInit() {
  }

}
