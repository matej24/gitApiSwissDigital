import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map, filter, switchMap, catchError, retry } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http:Http) { }

  getProfileInfo(username){
    return this.http.get("https://api.github.com/users/" + username)
    .pipe(map((response: any) => response.json())); 
  }
}



