import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { homeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',
component:homeComponent},
{path:'about',
component:AboutComponent},
{
  path:'**',
  component:NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
