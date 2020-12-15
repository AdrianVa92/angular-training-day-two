import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Angular Training';
  appSubtitle = "Subtitle from Services";

  subjectName = new Subject();

  color = new Subject();

  constructor() { }

  toUpperCase(text: any): any {
    return text.toUpperCase();
  }

  toColor(text: any): any {
    return text.toColor;
  }
}
