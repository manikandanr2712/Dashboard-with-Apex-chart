import { Component } from '@angular/core';

@Component({
  selector: 'app-first-main-content',
  templateUrl: './first-main-content.component.html',
  styleUrls: ['./first-main-content.component.scss']
})
export class FirstMainContentComponent {
  logisticData: any[] = [
    { id: 1, name: 'Product A', quantity: 100, location: 'Warehouse 1' },
    { id: 2, name: 'Product B', quantity: 150, location: 'Warehouse 2' },
    { id: 3, name: 'Product C', quantity: 80, location: 'Warehouse 1' },
    { id: 4, name: 'Product D', quantity: 180, location: 'Warehouse 1' },
    { id: 5, name: 'Product E', quantity: 810, location: 'Warehouse 1' },
    { id: 6, name: 'Product F', quantity: 810, location: 'Warehouse 1' },
    { id: 7, name: 'Product G', quantity: 810, location: 'Warehouse 1' },
    { id: 4, name: 'Product D', quantity: 180, location: 'Warehouse 1' },
    { id: 5, name: 'Product E', quantity: 810, location: 'Warehouse 1' },
    { id: 6, name: 'Product F', quantity: 810, location: 'Warehouse 1' },
    { id: 7, name: 'Product G', quantity: 810, location: 'Warehouse 1' },
    // Add more sample data as needed
  ];
}
