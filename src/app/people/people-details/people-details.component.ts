import { Component, OnInit, Input } from '@angular/core';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  @Input() person: any

  constructor( private route: ActivatedRoute, private apiService: ApiService, private peopleService: PeopleService) { }

  ngOnInit() {
    this.person = this.peopleService.getPerson(+this.route.snapshot.params['index']);
    console.log(+this.route.snapshot.params['index']);
  }

}
