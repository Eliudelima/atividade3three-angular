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
import { DisciplinasCursoDetailsComponent } from './disciplinas-curso-details/disciplinas-curso-details.component';






@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
       
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'disciplinas-details', component: DisciplinasDetailsComponent}, 
      {path: 'disciplinas-list', component: DisciplinasListComponent}, 
      {path: 'disciplina', component: DisciplinasListComponent}, 
      {path: 'disciplina/:index', component: DisciplinasDetailsComponent},
      {path: 'disciplinas-curso', component: DisciplinasCursoComponent},
      {path: 'disciplinas-curso-details', component: DisciplinasCursoDetailsComponent}
       
   
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasListComponent, DisciplinasDetailsComponent, DisciplinasCursoComponent, DisciplinasCursoDetailsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }