import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiWoloxService {
  constructor(
    private http: HttpClient
  ) {
  }
}
