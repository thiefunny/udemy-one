import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
serverID = Math.round(Math.random()*10);
serverStatus = 'offline';
mikFunc = 'blue'

constructor() {
  this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
}

getColor() {
  return this.serverStatus === 'online' ? 'green':'red';
}

}