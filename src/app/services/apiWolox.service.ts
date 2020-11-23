import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Listado, Registro} from './apiWolox';
import {Observable} from 'rxjs';

@Injectable()
export class ApiWoloxService {

  constructor(
    private http: HttpClient
  ) {
  }

  traerListado(): Observable<Listado[]> {
    const url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs';
    return this.http.get<Listado[]>(url);
  }

  RegistarUsuario(registro: Registro): Observable<any> {
    const url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup';
    return this.http.post<any>(url, registro);
  }
}
