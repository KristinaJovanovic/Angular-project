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

  }
  dodaj(){

  }

}
