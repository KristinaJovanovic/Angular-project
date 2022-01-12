import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar-item',
  templateUrl: './side-navbar-item.component.html',
  styleUrls: ['./side-navbar-item.component.css']
})
export class SideNavbarItemComponent implements OnInit {
  @Input() name:string='';
  @Input() route:string='';
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  openLink(){
    this.router.navigate([this.route])
  }

}
