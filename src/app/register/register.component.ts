import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';

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
    this.userdata = this.person;
    console.log(JSON.stringify(this.userdata) + 'firing from check function');
  }
  constructor(private userdata:UserDataService) { }

  ngOnInit() {
  }

}
