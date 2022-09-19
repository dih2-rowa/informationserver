import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';
import { json } from 'express';
import { FiwareOrder, Orders } from '../models/Orders';
import { FiwareProduct } from '../models/Products';
import { FiwareRobot, Robot } from '../models/Robot';

@Injectable({
  providedIn: 'root'
})
export class FiwareService {
data:string;
header = new HttpHeaders({'Content-Type':'application/json;'})
  constructor(private http: HttpClient, private router:Router) { }

  addProduct(jsonString){

    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });

    // this.http.get("http://localhost:1026/v2/entities").subscribe(res => {
    //   console.log(res);
    // })

    return this.http.post("http://localhost:1026/v2/entities" , jsonString ,{headers: this.header} ).subscribe(res => {
      this.router.navigateByUrl('/overview');
    });

  }

  getProducts(){
    this.header = new HttpHeaders({
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
   this.http.get<FiwareProduct>("http://localhost:1026/v2/entities", {headers: this.header}).pipe().subscribe(res => console.log(res));
    return this.http.get<FiwareProduct>("http://localhost:1026/v2/entities", {headers: this.header});
  }

  updateProduct(jsonString, productId:string){
    console.log(productId);
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
     console.log(jsonString)
    this.http.patch("http://localhost:1026/v2/entities/" + productId + '/attrs', jsonString, {headers: this.header}).subscribe(() => console.log('Update successfull'));
    this.router.navigateByUrl('/overview');
  }

  deleteProduct(id:string){
    this.header = new HttpHeaders({
      "fiware-service" : "robot_info",
      "fiware-servicepath": "/demo"
     });
     console.log("http://localhost:1026/v2/entities/" + id);
    return this.http.delete<FiwareProduct>("http://localhost:1026/v2/entities/" + id, {headers: this.header}).subscribe(() => console.log('Deleted successful'));
  }


  getProduct(id:string){
    this.header = new HttpHeaders({
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
    return this.http.get<FiwareProduct>(`http://localhost:1026/v2/entities/${id}`, {headers: this.header});
  }


  addRobot(jsonString: string){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
    return this.http.post<Robot>(`http://localhost:1026/v2/entities/`, jsonString, {headers: this.header}).subscribe(() => {
      this.router.navigateByUrl('/overview')
    });
  }

  deleteRobot(id:string){
    this.header = new HttpHeaders({
      "fiware-service" : "robot_info",
      "fiware-servicepath": "/demo"
     });
     console.log("http://localhost:1026/v2/entities/" + id);
    return this.http.delete<FiwareRobot>("http://localhost:1026/v2/entities/" + id, {headers: this.header}).subscribe(() => console.log('Deleted successful'));
  }

  getRobot(id:string){
    this.header = new HttpHeaders({
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
    return this.http.get<FiwareRobot>(`http://localhost:1026/v2/entities/${id}`, {headers: this.header});
  }

  updateRobot(jsonString, productId:string){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
     console.log(jsonString)
    this.http.patch("http://localhost:1026/v2/entities/" + productId + '/attrs', jsonString, {headers: this.header}).subscribe(() => console.log('Update successfull'));
  }

  getRobots(){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
     return this.http.get<FiwareRobot>("http://localhost:1026/v2/entities/");
  }

  addOrder(jsonString: string){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
    return this.http.post<Orders>(`http://localhost:1026/v2/entities/`, jsonString, {headers: this.header}).subscribe(() => {
      this.router.navigateByUrl('/overview')
    });
  }

  deleteOrder(id:string){
    this.header = new HttpHeaders({
      "fiware-service" : "robot_info",
      "fiware-servicepath": "/demo"
     });
     console.log("http://localhost:1026/v2/entities/" + id);
    return this.http.delete<FiwareOrder>("http://localhost:1026/v2/entities/" + id, {headers: this.header}).subscribe(() => console.log('Deleted successful'));

  }

  getOrder(id:string){
    this.header = new HttpHeaders({
    'fiware-service' : 'robot_info',
    "fiware-servicepath": "/demo"
   });
  return this.http.get<FiwareOrder>(`http://localhost:1026/v2/entities/${id}`, {headers: this.header});
  }

  updateOrder(jsonString, productId:string){
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
      'fiware-service' : 'robot_info',
      "fiware-servicepath": "/demo"
     });
    this.http.patch("http://localhost:1026/v2/entities/" + productId + '/attrs', jsonString, {headers: this.header}).subscribe(() => this.router.navigateByUrl('/overview'));
  }
}
