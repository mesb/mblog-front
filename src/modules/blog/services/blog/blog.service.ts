import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  query() {
    return this.http.get(this.url);
  }
}
