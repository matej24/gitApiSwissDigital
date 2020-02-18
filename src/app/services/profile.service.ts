import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, filter, switchMap, catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;

  constructor(private http:Http) { 
    console.log("http works");
    this.username = "";
  }


  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username)
    .pipe(map((response: any) => response.json())); 
  }

  updateProfile(username:string){
    this.username = username;
  }
  
  getFirstTenUsers(){
    return this.http.get("https://api.github.com/search/users?q=test")
    .pipe(map((response: any) => response.json())); 
  }
}
