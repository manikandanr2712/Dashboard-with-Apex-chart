import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  private jsonDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  jsonData$ = this.jsonDataSubject.asObservable();
  constructor() { }

    updateJsonData(data: any) {
      this.jsonDataSubject.next(data);
    }
  
}
