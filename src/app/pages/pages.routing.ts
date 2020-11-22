import {RouterModule, Routes} from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {AuthGuard} from '../guards/auth.guard';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'register', component: RegistroComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {

}
