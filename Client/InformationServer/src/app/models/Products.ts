import { Orders } from "./Orders";

export interface Product{
    entity_id : string;
    programname : string;
    programversion: number;
    versiononrobot : boolean;
    processinglength: number;
    plancycletime: number;
    pdf:string;
    orderstodo: Orders[];
    ordersfinished: Orders[];
    orderrunning: Orders;
}

export interface ProductPage{
    product:Product;
    runningorder: Orders;
    pendingorders: Orders[];
    finishedorders:Orders[];
}