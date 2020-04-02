import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default path
  { path: 'home', component: HomeComponent },
  { path: 'charts/:id', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
