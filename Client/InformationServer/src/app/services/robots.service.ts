import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseUrl

  get_robots(){
    return this.http.get(this.baseUrl + '/robots');
  }
}
