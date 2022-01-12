import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { PrioritetObrade } from 'src/app/models/prioritetObrade.models';
import { Privilegije } from 'src/app/models/privilegije.models';
import { Reuest } from 'src/app/models/reuest.models';
import { ReuestService } from 'src/app/servise/reuest.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  selectedIndex:number = -1;
  reverse = false;

  constructor(public service:ReuestService) {}

  ngOnInit(): void {
  }

  sortTable(index: number){
    if(this.selectedIndex == index){
      this.reverse = !this.reverse
    }else{
      this.reverse = false;
    }
    this.selectedIndex = index;

    this.service.lista.sort((a,b)=>{
      let a_val:any = Object.values(a)[index];
      let b_val:any = Object.values(b)[index];

      if(a_val>b_val)
        return this.reverse?-1:1
      else if(a_val<b_val)
        return this.reverse?1:-1
      else
        return 0
    });
  }

  privilegijeToString(privilegija:number){
    return Privilegije[privilegija];

  }
prioritetObradeToString(prioritet:number){
  return PrioritetObrade[prioritet];

}
obrisiRed(i:number){
    this.service.izbaciRequest(i)
}


}
