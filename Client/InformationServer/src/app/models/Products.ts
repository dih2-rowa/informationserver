import { Time } from "@angular/common";
import { Orders } from "./Orders";

export interface Product{
    id:string;
    programName : string;
    programVersion: number;
    versionOnRobot : boolean;
    processingLength: number;
    planCycleTime: number;
    ordersTodo: Orders[];
    ordersFinished: Orders[];
    orderRunning: Orders;
}

export interface ProductPage{
    product:Product;
    runningOrder: Orders;
    pendingOrders: Orders[];
    finishedOrders:Orders[];
}