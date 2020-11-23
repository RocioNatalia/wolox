import {Component, OnInit} from '@angular/core';
import {ApiWoloxService} from '../../services/apiWolox.service';
import {Listado} from '../../services/apiWolox';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ListadoComponent implements OnInit {
  public listado: Listado[] | any = [];
  public listadoOriginal: Listado[] | any = [];
  textobuscar = '';
  cantidadFav = 0;

  constructor(private apiWoloxService: ApiWoloxService) {
  }

  ngOnInit(): void {

    const listadoFav = sessionStorage.getItem('listadoFav');
    if (listadoFav) {
      this.listado = JSON.parse(listadoFav);
      this.listadoOriginal = JSON.parse(listadoFav);
      this.contarFavs(this.listado);

    } else {
      this.apiWoloxService.traerListado().subscribe(res => {
        res.forEach(item => {
          item.favorito = false;
        });
        this.listado = res;
        this.listadoOriginal = res;
      }, error => {
        this.listado = [];
        this.listadoOriginal = [];
      });
    }
  }

  filtrar(): void {
    if (this.textobuscar.length > 0) {
      const result = this.listadoOriginal.filter((item: { tech: string; language: string; license: string; author: string; year: string; }) => {
        const texto = `${item.tech}${item.language}${item.license}${item.author}${item.year}`;
        return texto.toLowerCase().includes(this.textobuscar.toLowerCase());
      });
      this.listado = result;
    } else {
      this.listado = this.listadoOriginal;
    }
  }

  private contarFavs(lista: Listado | any): void {
    this.cantidadFav = 0;
    lista.forEach((item: { favorito: boolean }) => {
      if (item.favorito) {
        this.cantidadFav++;
      }
    });
  }

  guardarListado(): void {
    sessionStorage.setItem('listadoFav', JSON.stringify(this.listado));
    this.contarFavs(this.listado);
  }

  ordenarLista(): void {
    this.listado = this.listado.sort((a: { tech: string; }, b: { tech: string; }) => {
        if (a.tech > b.tech) {
          return 1;
        }
        if (a.tech < b.tech) {
          return -1;
        }
        return 0;
    });
  }
}


