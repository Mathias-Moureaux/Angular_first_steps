import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeevService {

  constructor(private http: HttpClient) { }

  
  // geevUrl = "https://jsonplaceholder.typicode.com/posts"
  geevUrl = "https://prod.geev.fr/alive"
  

  getGeev(): Observable<any[]> {
    return this.http.get<any[]>(this.geevUrl)
  }
}
