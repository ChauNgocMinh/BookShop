import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class HttpServiceService {
  constructor(private httpClient: HttpClient) { }
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  public fetchData(apiUrl: string): Observable<any> {
    return this.httpClient.get<any>(apiUrl, this.httpOptions);
  }

  public getProductById(apiUrl: string): Observable<any> {
    return this.httpClient.get<any>(apiUrl, this.httpOptions);
  }

  postData(apiUrl: string, data: any): Observable<any> {
    return this.httpClient.post<any>(apiUrl, data);
  }
}
