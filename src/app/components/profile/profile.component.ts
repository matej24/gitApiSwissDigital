import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'gasd-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  username: string;
  users: any;

  constructor(private profileService: ProfileService) { 

   }

   findProfile(){
     this.profileService.updateProfile(this.username);
     this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    },
    error => {
      this.profile = "";
    });
   }


  ngOnInit(): void {
    console.log("init");
    this.profileService.getFirstTenUsers().subscribe(users => {
      console.log(users)
      this.users = users.items.slice(0, 10)
      console.log("tenUsers", this.users)
    })  
  }

}
