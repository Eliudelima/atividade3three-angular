import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisciplinasListComponent } from './disciplinas-list/disciplinas-list.component';
import { DisciplinasDetailsComponent } from './disciplinas-details/disciplinas-details.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoDetailsComponent} from './curso-details/curso-details.component';








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
      {path: 'curso-details', component: CursoDetailsComponent},
      {path: 'curso-list', component: CursoListComponent},
      {path: 'cursos/:index', component: CursoDetailsComponent},
       
   
            
    ])
  ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, DisciplinasListComponent, DisciplinasDetailsComponent, CursoListComponent, CursoDetailsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }