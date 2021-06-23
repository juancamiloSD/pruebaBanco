import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:any = [];
  nit:any = [];

  constructor(private _homeservice:ServiceService) { }

  ngOnInit(): void {
    this._homeservice.getHome(this.nit)
    .subscribe((res:any) => {
      this.data = res;
    });
  }

}
