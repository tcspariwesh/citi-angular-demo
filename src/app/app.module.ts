import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  declarations: [//all components 
    AppComponent, CounterComponent
  ],
  imports: [
    BrowserModule, FormsModule,  HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
