import { Component, OnDestroy } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnDestroy {
  subscription: any;
  jsonData: any;
  userName: any;
  status: any;
  phone: any;
  email: any;

  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.jsonData$.subscribe((data) => {
      this.jsonData = data;
    });
    this.userName = this.jsonData?.name ? this.jsonData?.name : "Mani kandan" ;
    this.status = this.jsonData?.status ? this.jsonData?.status : "NIL" ;
    this.phone = this.jsonData?.phone ? this.jsonData?.phone : "NIL" ;
    this.email = this.jsonData?.email ? this.jsonData?.email : "NIL" ;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
