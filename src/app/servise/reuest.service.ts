import { Injectable } from "@angular/core";
import { MatTabHeader } from "@angular/material/tabs";
import { PrioritetObrade } from "../models/prioritetObrade.models";
import { Privilegije } from "../models/privilegije.models";
import { Reuest } from "../models/reuest.models";

@Injectable({
    providedIn:'root'
})
export class ReuestService{
    lista:Reuest[]=[];
    reuest:Reuest=new Reuest();
    constructor(){
        let re1 = new Reuest();
        re1.id = 1;
        re1.nameZahteva = "Nesto";
        re1.podnosilacZahteva="Pero4";
        re1.privilegije=Privilegije.USER;
        re1.napomena='hgrhrhfh';
        re1.rokObrade=new Date("10-12-2020").toISOString().split('T')[0];
        re1.prioritetObrade=PrioritetObrade.MEDIUM;
        this.lista.push(re1)
    
        let re2 = new Reuest();
        re2.id = 2;
        re2.nameZahteva = "Nesto";
        re2.podnosilacZahteva="Pero2";
        re2.privilegije=Privilegije.USER;
        re2.napomena='hgrhrhfh';
        re2.rokObrade=new Date("10-12-2020").toISOString().split('T')[0];
        re2.prioritetObrade=PrioritetObrade.MEDIUM;
        this.lista.push(re2)
    
        let re3 = new Reuest();
        re3.id = 3;
        re3.nameZahteva = "Nesto";
        re3.podnosilacZahteva="Pero3";
        re3.privilegije=Privilegije.ADMIN;
        re3.napomena='hgrhrhfh';
        re3.rokObrade=new Date("10-12-2020").toISOString().split('T')[0];
        re3.prioritetObrade=PrioritetObrade.MEDIUM;
        this.lista.push(re3);
    }

    dodajReuest(){
        console.log(this.reuest);
        if(this.lista.length>0){
              this.reuest.id=Math.round(Math.random()*100);
        }else{
            this.reuest.id=0;
        }
        this.lista.push(this.reuest);
        this.inicijliyujReuest()
    }

    inicijliyujReuest(){
        this.reuest= new Reuest();
    }
}