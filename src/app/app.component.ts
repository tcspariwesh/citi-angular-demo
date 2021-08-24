import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({  //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//public , controller
  title = 'app1';
  userform ={firstname: 'Ram', dob:''}; //model
  users:any = [];
  constructor(private appService: AppService) {

  }
  handleClick() {
    this.appService.save(this.userform,
       (response: any)=> {//success handler
        console.log(response);
        this.users.push(response);
      },
      function (error: any) {//error handler
        alert(error);
      });
  }
  deleteUser(userId:number, index:number) {
    this.appService.deleteUser(userId,
     ( response:any) => {
        this.users.splice(index, 1)
      });
    console.log('deleted');
  }
}
