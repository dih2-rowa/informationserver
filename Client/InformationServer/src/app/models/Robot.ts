import { FiwareObject } from "./Products";

export interface Robot{
  id:string;
  version: number;
  robotRunning: boolean;
  robotSpeed: number;
  currCycleTime: number;
  drawer1Status: string;
  drawer2Status: string;
  restServiceLife: number;
  orderID: string;
}


export interface FiwareRobot{
  id: string;
  type:string;
  version: FiwareObject,
  robotSpeed: FiwareObject,
  robotRunning: FiwareObject,
  restServiceLife:FiwareObject,
  drawer2Status: FiwareObject,
  drawer1Status: FiwareObject,
  currCycleTime: FiwareObject,
  orderId: FiwareObject
}
