

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