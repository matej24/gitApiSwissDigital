import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from '../../services/user-info.service'



@Component({
  selector: 'gasd-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo: any;

  constructor(private route: Router, private _Activatedroute: ActivatedRoute, private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    console.log("userInfo", this._Activatedroute.snapshot.paramMap.get("login"))
    let username =  this._Activatedroute.snapshot.paramMap.get("login");
    this.getUserInfo(username)
  }

  getUserInfo(username) {
    this.userInfoService.getProfileInfo(username).subscribe(userInfo => {
      console.log(userInfo);
      this.userInfo = userInfo;
      console.log('this',userInfo);
    },
    error => {
      this.userInfo = {};
    });
  } 

  onBack(): void {
    this.route.navigate(['/']);
 }

}
