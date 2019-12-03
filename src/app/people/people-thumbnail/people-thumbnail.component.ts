import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-thumbnail',
  templateUrl: './people-thumbnail.component.html',
  styleUrls: ['./people-thumbnail.component.css']
})
export class PeopleThumbnailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() person: any
}
