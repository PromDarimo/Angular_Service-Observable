import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservibleService {
  constructor(
    private api : HttpClient
  ) { }

  getData(): Observable<any[]>{ //observable type any array
    return this.api.get<any[]>('/assets/data.json');
  }
}
