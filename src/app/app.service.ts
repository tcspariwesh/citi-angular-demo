import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable() //@Autowired
export class AppService {
    constructor(private http: HttpClient) {

    }
    save(firstName:String ) {
        const promise = this.http.post("http://localhost:3000/users",
            {
                "name": firstName
            });
        promise.subscribe(function (response) {//success handler
            console.log(response);
        }, 
        function(error){//error handler
            alert(error)
        })
        console.log('service method called');
    }
}