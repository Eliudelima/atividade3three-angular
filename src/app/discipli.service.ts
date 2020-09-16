import { Injectable } from '@angular/core';
import { Disci } from './disci';

@Injectable()
export class PeopleService {

  constructor() { }

  getAll() : Disci[] {
    return [
      {name: 'Luke Skywalker', height: 177, weight: 70},
      {name: 'Darth Vader', height: 200, weight: 100},
      {name: 'Han Solo', height: 185, weight: 85},
    ];
  }

}