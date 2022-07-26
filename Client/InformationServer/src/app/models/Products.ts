import { Orders } from "./Orders";

export interface Product{
    entity_id : string;
    programName : string;
    programVersion: number;
    versionOnRobot : boolean;
    processingLength: number;
    planCycleTime: number;
    pdf:string;
    orderstodo: Orders[];
    ordersfinished: Orders[];
    orderrunning: Orders;
}

export interface ProductPage{
    product:Product;
    runningOrder: Orders;
    pendingOrders: Orders[];
    finishedOrders:Orders[];
}
