import {Component} from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  public beneficios: Beneficio[];

  constructor() {
    this.beneficios = [
      {texto: 'Flexibilidad Horaria', imagen: 'Ic_Hour.svg'},
      {texto: 'Home Office', imagen: 'Ic_HomeOffice.svg'},
      {texto: 'Capacitaciones y Workshops', imagen: 'Ic_Workshops.svg'},
      {texto: 'Snacks, frutas y bebidas gratis', imagen: 'Ic_DrinkSnacks.svg'},
      {texto: 'Semana Remota', imagen: 'Ic_laptop.svg'},
      {texto: 'Trabajar en últimas tecnologías', imagen: 'Ic_brain.svg'}, ];

  }
}

interface Beneficio {
  texto: string;
  imagen: string;
}
