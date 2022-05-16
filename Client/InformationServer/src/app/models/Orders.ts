

export interface Orders{
    id: string;
    planParts: number;
    prodParts: number;
    startTime: Date;
    finishedTime:Date;
    deadline:Date;
    orderStatus: string;
    workingStation:string;
    product_id :string;

}