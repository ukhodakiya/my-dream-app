import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !!!';
  serverName = 'Testserver';
  serverCreated = false;
  server: string;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onServerCreate() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created !! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }
}

