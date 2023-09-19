import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', kms: 30,status: 'In-Transit' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', kms: 25,status: 'Stopped'},
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', kms: 28,status: 'Running' }
  ];
  tableData = [
    { data1: 'Item 1', data2: 'Category A', data3: 'Description for Item 1' },
    { data1: 'Item 2', data2: 'Category B', data3: 'Description for Item 2' },
    { data1: 'Item 3', data2: 'Category A', data3: 'Description for Item 3' },
    // Add more data items here
  ];
  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(1)])
  });

  newUser: any = {};
  selectedUserId: number | null = null;

  constructor(private sharedService: SharedService, private router: Router) {}
  // CRUD operations
  createUser() {
    const newId = this.users.length + 1;
    this.newUser.id = newId;
    this.newUser.name = this.userForm.value.name;
    this.newUser.email = this.userForm.value.email;;
    this.newUser.age = this.userForm.value.age;;
    this.users.push({ ...this.newUser });
    this.newUser = {};
    this.userForm.reset();
  }

  selectUser(id: number) {
    this.selectedUserId = id;
    const user = this.users.find(u => u.id === id);
    this.userForm.patchValue(user);
  }

  updateUser() {
    const updatedUser = this.userForm.value;
    const index = this.users.findIndex(u => u.id === this.selectedUserId);
    this.users[index] = { ...this.users[index], ...updatedUser };
    this.selectedUserId = null;
    this.userForm.reset();
  }

  deleteUser(id: number) {
    // Delete the user from the array or call an API to delete from the database
    this.users = this.users.filter(user => user.id !== id);
  }

  details(i:any, data:any) {
    console.log("mani",i,data);
    this.sharedService.updateJsonData(data);
    this.router.navigate(['dashboard/driver-details'])
  }
}