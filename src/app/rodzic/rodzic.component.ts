import { Component } from "@angular/core";

@Component({
    selector: 'app-rodzic',
    templateUrl: './rodzic.component.html',
    styleUrls: ['./rodzic.component.css']
})

export class RodzicComponent {

    receivedDziecko = [];
    dzieckoIndex: number = 0;

    onReceivedDziecko(value: string) {
        this.receivedDziecko.push(`${value} ${Math.random()}`);
        this.dzieckoIndex++;
        console.log(this.dzieckoIndex)
        // console.log(this.receivedDziecko)
    }

    dzieckoColor(index) {
        return `rgb(${index*10+100}, ${index*10+100}, ${index*10+100})`
    }

    siema() {
        return this.dzieckoIndex %5 === 0 ? true : false;
    }
}