import { Component, OnInit } from '@angular/core';

import { cursos } from '../cursos'

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  list = cursos;

  constructor() { }

  ngOnInit() {
  }

}