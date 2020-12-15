import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  color: any;

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._globalService.color.next(this.color);
  }

  ngOnDestroy(): void{
    this._globalService.color.next('dark');
  }
}
