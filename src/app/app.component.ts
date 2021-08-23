import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public 
  title = 'app1';
  firstname = 'Ram';

  constructor(private appService:AppService){

  }
  handleClick() {
    this.appService.save();
    console.log(this.firstname);
  }
  delete1() {
    console.log('deleted');
  }
}
