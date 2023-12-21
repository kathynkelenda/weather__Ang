import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule
    ],
    providers: [],
    declarations: [
        AppComponent
    ],
    exports: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}