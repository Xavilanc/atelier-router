import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: "", component: SearchComponent},
  { path: "wcs/:student", component: StudentComponent},
  { path: "**", component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
