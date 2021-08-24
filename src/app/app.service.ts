import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable() //@Autowired
export class AppService{
    constructor(private http: HttpClient){

    }
    save(){
       const promise =  this.http.post("http://localhost:3000/users", 
        {
            "name":"Ram"
        } );
        promise.subscribe(function(response){
            console.log(response);
            
        })
        console.log('service method called');
    }
}