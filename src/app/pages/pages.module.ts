import {NgModule} from '@angular/core';
import {RegistroComponent} from './registro/registro.component';
import {RouterModule} from '@angular/router';
import {ListadoComponent} from './listado/listado.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    ListadoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : []
})
export class PagesModule{

}
