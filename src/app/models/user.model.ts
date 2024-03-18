export interface User {
    id:       number;
    username: string;
    email:    string;
    password: string;
    roles:    Role[];
   groupeUser : string;

}

export interface Role {
    id:   number;
    name: string;
}