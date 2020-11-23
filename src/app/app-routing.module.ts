import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {PagesRouting} from './pages/pages.routing';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: 'home', component: LandingComponent
  }
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    PagesRouting,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
