import { Component } from '@angular/core';

@Component({  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public 
  title = 'app1';
  firstname = 'Ram';
  handleClick() {
    console.log(this.firstname);
  }
  delete1() {
    console.log('deleted');
  }
}
