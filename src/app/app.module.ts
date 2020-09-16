import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasListComponent } from './disciplinas-list/disciplinas-list.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';
import { DisciplinasCursoComponent } from './disciplinas-curso/disciplinas-curso.component';





@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
   
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
   
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasListComponent, DisciplinasDetailsComponent, DisciplinasCursoComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }