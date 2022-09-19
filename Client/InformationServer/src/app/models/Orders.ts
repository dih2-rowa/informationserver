import { FiwareObject } from "./Products";


export interface Orders{
    entity_id: string;
    planparts: number;
    prodparts: number;
    prodpartsio: number;
    starttime: Date;
    finishedtime:Date;
    deadline:Date;
    orderstatus: string;
    workingstation:string;
    productid :string;
    __original_ngsi_entity__:any;
    fiware_servicepath: string;
    time_index: number;

}

export interface FiwareOrder{
  id:string;
  type: string;
  deadline: FiwareObject;
  startTime: FiwareObject;
  finishedTime: FiwareObject;
  orderStatus: FiwareObject;
  planParts: FiwareObject;
  prodParts: FiwareObject;
  prodPartsIO?: FiwareObject;
  productID: FiwareObject;
  workingStation: FiwareObject;
}
