import { Component, OnInit } from '@angular/core';
import { PrioritetObrade } from 'src/app/models/prioritetObrade.models';
import { ReuestService } from 'src/app/servise/reuest.service';

@Component({
  selector: 'app-right-form',
  templateUrl: './right-form.component.html',
  styleUrls: ['./right-form.component.css']
})
export class RightFormComponent implements OnInit {

  constructor(public service: ReuestService) { }

  ngOnInit(): void {
  }
  updatePrioritet(prioritet: string) {

    switch (prioritet) {
      case 'low':
        this.service.reuest.prioritetObrade = PrioritetObrade.LOW
        break;
      case 'medium':
        this.service.reuest.prioritetObrade = PrioritetObrade.MEDIUM
        break;
      case 'high':
        this.service.reuest.prioritetObrade = PrioritetObrade.HIGH
        break;
      default:
        break;
    }

  }

}
