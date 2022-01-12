import { Component, OnInit } from '@angular/core';
import { ReuestService } from 'src/app/servise/reuest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public service:ReuestService) { }

  ngOnInit(): void {
  }

  odbaci(){
    this.service.inicijliyujReuest()
  }
  dodaj(){
    if(this.service.reuest.podnosilacZahteva!="" && this.service.reuest.nameZahteva!=""){
      this.service.dodajReuest()
      alert("Uspesno stepodneli zahtev!")
    }else{
      alert("Popunite obavezna polja!")
    }
  }

}
