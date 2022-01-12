import { NullTemplateVisitor } from "@angular/compiler";
import { PrioritetObrade } from "./prioritetObrade.models";
import { Privilegije } from "./privilegije.models";


export class Reuest{
    id: number | null;
    nameZahteva: string;
    podnosilacZahteva: string;
    privilegije: Privilegije;
    napomena: string;
    rokObrade: string;
    prioritetObrade: PrioritetObrade;

    constructor(){
        this.id=null;
        this.nameZahteva='';
        this.podnosilacZahteva='';
        this.privilegije=Privilegije.ADMIN;
        this.napomena='';
        this.rokObrade=new Date().toISOString();
        this.prioritetObrade=PrioritetObrade.HIGH;


    }

}