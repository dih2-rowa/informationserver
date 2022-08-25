import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class FiwareService {
data:string;
header = new HttpHeaders({'Content-Type':'application/json;',
                          'Access-Control-Allow-Origin' : '*'})
  constructor(private http: HttpClient, private router:Router) { }

  addProduct(jsonString){

    let headers = new Headers ({'Accept': 'application/json', 'Fiware-Service': 'x', 'Fiware-ServicePath': '/x', 'Access-Control-Allow-Origin': '*'});

    // this.http.get("http://localhost:1026/v2/entities").subscribe(res => {
    //   console.log(res);
    // })
    console.log(JSON.stringify(jsonString));

    this.http.post("http://localhost:1026/v2/entities"  ,{headers: headers, body: JSON.stringify(jsonString)} ).subscribe(res => {
      this.router.navigateByUrl('/overview');
    });

  }
}
