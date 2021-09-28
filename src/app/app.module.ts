import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MikiComponent } from './miki/miki.component';
import { RodzicComponent } from './rodzic/rodzic.component';
import { DzieckoComponent } from './dziecko/dziecko.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MikiComponent,
    ServersComponent,
    RodzicComponent,
    DzieckoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
