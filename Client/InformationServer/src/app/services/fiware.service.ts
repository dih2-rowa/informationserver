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
header = new HttpHeaders({'Content-Type':'application/json;'})
  constructor(private http: HttpClient, private router:Router) { }

  addProduct(jsonString){


    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });

    // this.http.get("http://localhost:1026/v2/entities").subscribe(res => {
    //   console.log(res);
    // })
    console.log(JSON.stringify(jsonString));

    return this.http.post("http://localhost:1026/v2/entities" , jsonString ,{headers: headers} ).subscribe(res => {
      this.router.navigateByUrl('/overview');
    });

  }
}
