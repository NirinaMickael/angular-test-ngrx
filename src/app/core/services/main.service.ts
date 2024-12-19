import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";
@Injectable()
export class MainService{
    SERVER_URL=environment.API

    constructor(private httpClient:HttpClient){}

    GET<T>(api:string):Observable<T>{
        return this.httpClient.get<T>(`${this.SERVER_URL}${api}`);
    }
    POST<T>(api:string,payload:T):Observable<T>{
        console.log(`${this.SERVER_URL}${api}`);
        
        return this.httpClient.post<T>(`${this.SERVER_URL}${api}`,payload)
    }
}