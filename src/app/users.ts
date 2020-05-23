export class  Users{
    constructor(
    public role:string,
    public name:string,
    public email:string,
    public password:string,
    ) {}
}

export interface Users{
    role:string,
    name:string,
    email:string,
    password:string,
}