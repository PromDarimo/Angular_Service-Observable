import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObservibleService {
  constructor(
    private api : HttpClient
  ) { }

  getData(): Observable<any[]>{ //observable type any array
    return this.api.get<any[]>('/assets/data.json')
    .pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = error.message;
    //Will show status erorr if getting error (ex: 404 not found...);
    
    return throwError(errorMessage);
    // Return an observable with a user-facing error message.
  }
}
