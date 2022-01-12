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
        if(localStorage.getItem("lista")==null){
            localStorage.setItem("lista",JSON.stringify([]))
            this.lista=[];
        }else{
            this.lista=JSON.parse(localStorage.getItem("lista") || '[]')
        }
    }

    dodajReuest(){
        console.log(this.reuest);
        if(this.lista.length>0){
              this.reuest.id=Math.round(Math.random()*100);
        }else{
            this.reuest.id=0;
        }
        this.lista.push(this.reuest);
        localStorage.setItem("lista",JSON.stringify(this.lista))
        this.inicijliyujReuest()
    }

    izbaciRequest(index:any){
        this.lista.splice(index,1);
        localStorage.setItem("lista",JSON.stringify(this.lista))
    }

    inicijliyujReuest(){
        this.reuest= new Reuest();
    }
}