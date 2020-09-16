import { Component, OnInit } from '@angular/core';

import { cursos } from '../cursos';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html',
  styleUrls: ['./curso-details.component.css']
})
export class CursoDetailsComponent implements OnInit {
  curso;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.curso = cursos[params.get('index')];
    }
    );
  }

}