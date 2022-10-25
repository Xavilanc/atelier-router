import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  studentName = '';

  constructor( private router: Router) { }

  navigateToSchool(): void {
    this.router.navigate(['/wcs' , this.studentName]);
  }

  ngOnInit() {
  }

}
