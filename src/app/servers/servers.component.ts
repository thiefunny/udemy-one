import { Component, Input, OnInit } from '@angular/core'

@Component ({
    selector: 'app-servers',
    templateUrl: 'servers.component.html',
    styleUrls:['servers.component.css']
})

export class ServersComponent {
    
    allowNewServer = false;
    buttonText = `colorred`;
    buttonName = 'bzik';
    textOnButton = 'Add BzikServer';
    serverCreationStatus = 'Server not available';
    serverName='InitialServer';
    serverCreated = false;
    servers = new Array(10);

    constructor() {
        setTimeout(_ => {
            this.allowNewServer = true;
        },2000)
    }

    onServerCreation() {
        this.serverCreationStatus = `Server created! Thanks! Server name is ${this.serverName}`;
        this.serverCreated = true;
        this.servers.push(this.serverName)
    }

    onUpdateServerName(event: any) {
        // console.log(event)
        this.serverName = event.target.value;
    }

    mikiVarFull = 'chj';

    @Input() goToServers: any;
    @Input() goToServers2: number;

    onButtonClick(cos) {
        console.log(cos)
    }

}