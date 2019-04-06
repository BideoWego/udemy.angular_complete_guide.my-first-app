import { Component, OnInit } from '@angular/core';

@Component({
  // Can select by element
  selector: 'app-servers',
  // Can select by attribute
  // selector: '[app-servers]',
  // Can select by class
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
