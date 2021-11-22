import { Component } from '@angular/core';
import { title } from 'process';

@Component( {
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
    <div class="app">
       
    </div>
    `
})

export class AppComponent{

    title:string = "Hello World";

    constructor(){

    }
}