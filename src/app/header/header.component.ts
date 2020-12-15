import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../services/global.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() color: string;

  title = 'Angular';
  subtitle = 'Angular subtitle'
  constructor( private _globalService: GlobalService, private _router: ActivatedRoute) {
    this.color = 'dark';
  }

  ngOnInit(): void {
    this.title = this._globalService.toUpperCase(this._globalService.appTitle);
    this.subtitle = this._globalService.appSubtitle;

    this._globalService.color.subscribe(
      (name: any) => {
        this.color = name;
      }
    )
  }
}
