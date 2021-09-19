import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  API =
    'https://api.pancakeswap.info/api/v2/tokens/0x31471E0791fCdbE82fbF4C44943255e923F1b794';
  constructor(private http: HttpClient) {}

  getPVUPrice() {
    return this.http.get(this.API);
  }

  getDolarPrice() {
    return this.http.get('assets/dolarPrice.json');
  }
}
