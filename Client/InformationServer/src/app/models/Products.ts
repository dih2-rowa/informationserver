import { Orders } from "./Orders";

export interface Product{
    entity_id : string;
    programname : string;
    programversion: number;
    versiononrobot : number;
    processinglength: number;
    plancycletime: number;
    pdf:string;
    orderstodo: Orders[];
    ordersfinished: Orders[];
    orderrunning: Orders;
}


export interface ProductPage{
    product:Product;
    orderrunning: Orders;
    orderstodo: Orders[];
    ordersfinished:Orders[];
}

export interface FiwareObject{
  type: string;
  value: any;
  metadata:any;
}

export interface FiwareProduct{
  id:string;
  type: string;
  pdf: FiwareObject;
  planCycleTime: FiwareObject;
  processingLength: FiwareObject;
  programName: FiwareObject;
  programVersion: FiwareObject;
  versionOnRobot: FiwareObject;
}
