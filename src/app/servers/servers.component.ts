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
  canCreateServer = false;
  didCreateServer = false;
  serverName = 'Untitled';
  status = "No server created";

  constructor() {
    setTimeout(() => {
      this.canCreateServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClickCreateServer() {
    this.status = "Server created!";
    this.didCreateServer = true;
  }

  onChangeServerName(event: any) {
    this.serverName = event.target.value;
  }
}
