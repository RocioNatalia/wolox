import {RouterModule, Routes} from '@angular/router';
import {RegistroComponent} from './registro/registro.component';
import {AuthGuard} from '../guards/auth.guard';
import {NgModule} from '@angular/core';
import {ListadoComponent} from './listado/listado.component';

const routes: Routes = [
  {path: 'register', component: RegistroComponent},
  {path: 'listado', component: ListadoComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {

}
