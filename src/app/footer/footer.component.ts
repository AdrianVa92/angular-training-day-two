import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() color : string;
  constructor(private _globalService : GlobalService) {
    this.color = 'dark';
   }

  ngOnInit(): void {
    this._globalService.color.subscribe(
      (name: any) => {
        this.color = name;
      }
    )
  }

}
