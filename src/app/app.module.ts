import { NgModule } from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MainComponent,
    AppComponent
  ],
  providers: [],

})
export class AppModule { }
