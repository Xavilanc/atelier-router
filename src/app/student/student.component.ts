import { Component, OnInit } from '@angular/core';
import { Wilders } from '../models/wilders';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  wilders: Wilders[] = [
    {
      id: 1,
      firstname: 'Maria',
      lastname: 'Serrano',
      school: 'WCS Lyon'
    },
    {
      id: 2,
      firstname: 'Simon',
      lastname: 'Gustav',
      school: 'WCS Lyon'
    },
    {
      id: 3,
      firstname: 'Franck',
      lastname: 'Turpin',
      school: 'WCS Paris'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
