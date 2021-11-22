import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
         BrowserModule,
         FormsModule,
         CommonModule
    ],

    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}