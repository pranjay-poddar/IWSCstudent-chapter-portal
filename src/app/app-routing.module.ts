import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './homeSec/about-us/about-us.component';
import { LoginPageComponent } from './homeSec/login-page/login-page.component';
import { ScComponent } from './homeSec/sc/sc.component';
import { TeamComponent } from './Team/team/team.component';
import { MembersComponent } from './Members/members/members.component'
import { RankingComponent } from './Ranking/ranking/ranking.component';
import { AchievementsComponent } from './Members/achievements/achievements.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:AboutUsComponent},
  {path: 'studentchapters', component: ScComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'rankings', component: RankingComponent},
  {path: 'members', component: MembersComponent},
  {path: 'achievements', component: AchievementsComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent, ScComponent, LoginPageComponent];
