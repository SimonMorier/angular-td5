import { Injectable } from '@angular/core';
import { IPassagerDto, Passager } from '../models/passager.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PassagerService {
  constructor(private http: HttpClient) {}

  getPassager(seed: string, number: number): Observable<Passager[]> {
    return this.http
      .get<any>(
        `https://randomuser.me/api/?seed=${seed}&results=${number}&inc=name,picture,email`
      )
      .pipe(
        map((response) =>
          response.results.map((dto: IPassagerDto) => new Passager(dto))
        )
      );
  }
}
