import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  baseUrl = environment.baseUrl;
  constructor(private http : HttpClient) { }

  get_pdfs(){
    return this.http.get<string[]>(this.baseUrl + '/api/pdfs/all');
  }
}
