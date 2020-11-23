import {Component, OnInit} from '@angular/core';
import {ApiWoloxService} from '../../services/apiWolox.service';
import {Listado} from '../../services/apiWolox';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {
  public listado: Listado[] = [];
  public listadoOriginal: Listado[] = [];
  textobuscar = '';

  constructor(private apiWoloxService: ApiWoloxService) {
  }

  ngOnInit(): void {
    this.apiWoloxService.traerListado().subscribe(res => {
      this.listado = res;
      this.listadoOriginal = res;
    }, error => {
      this.listado = [];
      this.listadoOriginal = [];
    });
  }

  filtrar(): void {
    if (this.textobuscar.length > 0) {
      const result = this.listadoOriginal.filter(item => {
        const texto = `${item.tech}${item.language}${item.license}${item.author}${item.year}`;
        return texto.toLowerCase().includes(this.textobuscar.toLowerCase());
      });
      this.listado = result;
    } else {
      this.listado = this.listadoOriginal;
    }
  }
}


