import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable() //@Autowired
export class AppService {
    constructor(private http: HttpClient) {

    }
    deleteUser(userId:number){
        const promise = this.http.delete(
            "http://localhost:3000/users/"+userId
        );
        promise.subscribe();
    }
    save(firstName: String, success: any, error: any) {
        const promise = this.http.post("http://localhost:3000/users",
            {
                "name": firstName
            });
        promise.subscribe(success, error)
        console.log('service method called');
    }
}