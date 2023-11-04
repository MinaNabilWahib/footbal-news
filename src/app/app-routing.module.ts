import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamStatisticsComponent } from './team-statistics/team-statistics.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'team/:id', component: TeamStatisticsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
