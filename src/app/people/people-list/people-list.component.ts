import { Component, OnInit, Output } from '@angular/core';
import { PeopleService } from '../people.service';
import { ApiService } from 'src/app/api.service';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:any[]

  constructor(private apiService: ApiService, private peopleService: PeopleService) { }

  ngOnInit() {
    this.apiService.getPeople().subscribe((data)=>{
      console.log(data);
      this.people = data['results'];
    });

  }
}