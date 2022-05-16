import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Orders } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  get_orders(){
    return this.http.get<Orders[]>(this.baseUrl + '/orders/all');
  }
}
