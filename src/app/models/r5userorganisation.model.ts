import { Organisation, Organisation2 } from "./organisation.model";

export interface R5UserOrganisation {
    id :number;
    uogorg : string;
    uogdesc : string;
    username : string;
    uoggroup: string;
    uogcommun: boolean;
    uogdefaut: boolean;
    organisation : Organisation;

};

export class R5UserOrganisation2 {
    id? :number;
    uogorg? : string;
    uogdesc? : string;
    username ?: string;
    uoggroup?: string;
    uogcommun?: boolean;
    uogdefaut?: boolean 
    organisation2? : Organisation2;

}