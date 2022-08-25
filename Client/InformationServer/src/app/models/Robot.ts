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
