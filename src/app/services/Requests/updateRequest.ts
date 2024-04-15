export class UpdateRequest{
    name:string;
    country:string;
    email:string;
    constructor(name:string, country:string, email:string){
        this.name=name;
        this.country=country;
        this.email=email;
    }   
}