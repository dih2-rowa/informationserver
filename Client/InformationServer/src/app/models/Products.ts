import { Time } from "@angular/common";

export interface Product{
    id:string;
    program_name : string;
    program_version: string;
    finished: boolean;
    process_length: string;
    shall_cycle_time: Time;
}