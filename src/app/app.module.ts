import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitComponent } from './git/git.component';




@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'git', component: GitComponent},
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, GitComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }