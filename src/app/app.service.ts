import { Injectable } from "@angular/core";


@Injectable() //@Autowired
export class AppService{
    save(){
        console.log('service method called');
    }
}