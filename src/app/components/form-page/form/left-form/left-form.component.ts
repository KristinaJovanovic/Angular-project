import { Component, OnInit } from '@angular/core';
import { Privilegije } from 'src/app/models/privilegije.models';
import { ReuestService } from 'src/app/servise/reuest.service';

@Component({
  selector: 'app-left-form',
  templateUrl: './left-form.component.html',
  styleUrls: ['./left-form.component.css']
})
export class LeftFormComponent implements OnInit {

  constructor(public service:ReuestService) { }

  ngOnInit(): void {
  }

  selectPrivilege(evt:any){
    console.log(evt.target.value);
    
     if(evt.target.value=='ADMIN'){
        this.service.reuest.privilegije=Privilegije.ADMIN
     }else{
      this.service.reuest.privilegije=Privilegije.USER
     }
  }

}
