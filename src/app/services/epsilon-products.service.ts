import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Inventory} from '../models/inventory';

@Injectable({
  providedIn: 'root'
})
export class EpsilonProductsService {

  constructor(private http: HttpClient) { }

  getEpsilonProducts(baseUrl: string) {
return this.http.get(baseUrl);
  }
}
