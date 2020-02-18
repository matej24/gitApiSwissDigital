import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './components/user-info/user-info.component';


const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'user-info/:login', component: UserInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserInfoComponent  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
