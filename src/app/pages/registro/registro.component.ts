import {Component} from '@angular/core';
import {Registro} from '../../services/apiWolox';
import {ApiWoloxService} from '../../services/apiWolox.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent {

  private registro: Registro;
  public mensaje = '';
  public registroForm;
  public mensajeError = '';
  paises = [
    {
      pais: 'Argentina',
      provincias: ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Chaco']
    },
    {
      pais: 'Colombia',
      provincias: ['Bolívar', 'Boyacá', 'Caldas', 'Cauca', 'Magdalena']
    },
    {
      pais: 'Chile',
      provincias: ['Antofagasta', 'Arauco', 'Arica', 'Aysén', 'Biobío']
    }, {
      pais: 'México',
      provincias: ['Chihuahua', 'Durango', 'Distrito Federal', 'Guanajuato', 'Guerrero']
    },
    {
      pais: 'Perú',
      provincias: ['Amazonas', 'Cusco', 'Ica', 'Junin', 'Lima']
    }
  ];
  public provicias = [];

  constructor(
    private router: Router,
    private apiWoloxService: ApiWoloxService,
    private formBuilder: FormBuilder) {
    this.registro = new Registro();
    this.registroForm = this.formBuilder.group({
      nameCtrl: ['', Validators.required],
      lastnameCtrl: ['', Validators.required],
      paisCtrl: ['', Validators.required],
      provinciaCtrl: ['', Validators.required],
      emailCtrl: ['', Validators.required],
      telefonoCtrl: ['', Validators.required],
      passCtrl: ['', Validators.required],
      passrepeatCtrl: ['', Validators.required],
      terminosCtrl: ['', Validators.required]
    });
    this.registroForm.controls.provinciaCtrl.disable();
  }

  public registar(): void {
    if (this.registroForm.status === 'VALID') {
      if (this.registroForm.controls.terminosCtrl.value) {
        if (this.registroForm.controls.passCtrl.value === this.registroForm.controls.passrepeatCtrl.value) {
          this.mensajeError = '';
          this.apiWoloxService.RegistarUsuario(this.registro).subscribe(res => {
            console.log(res);
            this.mensaje = 'Registro exitoso!';
            sessionStorage.setItem('token', res.token);
            this.router.navigate(['/listado']);
          }, error => {
            console.log(error);
            this.mensajeError = 'No se regitro correctamente';
          });
        } else {
          this.mensajeError = 'Las contraseñas no coinciden ';
        }
      } else {
        this.mensajeError = 'Debe aceptar los términos y condiciones';
      }
    } else {
      if (this.registroForm.controls.nameCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo nombre es inválido';
      }
      if (this.registroForm.controls.lastnameCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo apellido es inválido';
      }
      if (this.registroForm.controls.paisCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo país es inválido';
      }
      if (this.registroForm.controls.provinciaCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo provincia es inválido';
      }
      if (this.registroForm.controls.emailCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo email es inválido';
      }
      if (this.registroForm.controls.telefonoCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo telefono es inválido';
      }
      if (this.registroForm.controls.passCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo contraseña es inválido';
      }
      if (this.registroForm.controls.passrepeatCtrl.status === 'INVALID') {
        this.mensajeError = 'El campo repetir contraseña es inválido';
      }
      if (this.registroForm.controls.terminosCtrl.status === 'INVALID') {
        this.mensajeError = 'Debe aceptar los términos y condiciones';
      }
    }
  }

  cargarProvincias(): void {
    if (this.registroForm.controls.paisCtrl.status === 'VALID') {
      this.provicias = this.registroForm.controls.paisCtrl.value.provincias;
      this.registroForm.controls.provinciaCtrl.enable();
    } else {
      this.provicias = [];
    }
  }
}
