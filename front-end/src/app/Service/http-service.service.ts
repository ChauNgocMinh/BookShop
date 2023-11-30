import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class HttpServiceService {
  constructor(private httpClient: HttpClient) {}
  
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

  public postData(apiUrl: string, data: any): Observable<any> {
    return this.httpClient.post<any>(apiUrl, data);
  }

  
  decodeJwt(token: string): { header: any; payload: any } | null {
    const parts = token.split('.');

    if (parts.length !== 3) {
      // Invalid token format
      return null;
    }

    const decodedHeader = JSON.parse(atob(parts[0]));
    const decodedPayload = JSON.parse(atob(parts[1]));

    return {
      header: decodedHeader,
      payload: decodedPayload,
    };
  }
}
