import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApproutingModule } from './approuting.module';



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

