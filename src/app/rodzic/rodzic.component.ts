import { Component } from "@angular/core";

@Component({
    selector: 'app-rodzic',
    template: "<app-dziecko (dzieckoEmmiter)='onReceivedDziecko($event)'></app-dziecko>"
})

export class RodzicComponent {

    onReceivedDziecko(value: string) {
        console.log(value)
    }

}