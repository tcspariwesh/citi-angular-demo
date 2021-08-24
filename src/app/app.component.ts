import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public , controller
  title = 'app1';
  firstname = 'Ram'; //model

  constructor(private appService:AppService){

  }
  handleClick() {
    this.appService.save(this.firstname);
    console.log(this.firstname);
  }
  delete1() {
    console.log('deleted');
  }
}
