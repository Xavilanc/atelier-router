import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: "", component: SearchComponent},
  { path: "wcs/:studentName", component: StudentComponent},
  { path: "**", redirectTo: '/', pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
