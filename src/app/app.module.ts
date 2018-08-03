import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {RouterModule , Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {UserDataService} from './shared/user-data.service'

const appRoutes : Routes =[ 
  {path:'register' , component:RegisterComponent},
  {path:'records', component : RecordComponent},
  {path:'home', component : HomeComponent},
  { path: '**', component: WelcomeComponent }  
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    RecordComponent,
    WelcomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
