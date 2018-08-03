import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  person
  constructor(private data :UserDataService) { console.log(data)}

  ngOnInit() {
   this.person = this.data
  }

}
