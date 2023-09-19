import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  activeSubMenu: string | null = null;
  showMyContainer: boolean = false;
  status: boolean = false;
  statusLink: boolean = false;
  constructor(public authService: AuthService) {}
  toggleSubMenu(subMenu: string): void {
    if (this.activeSubMenu === subMenu) {
      this.activeSubMenu = null;
    } else {
      this.activeSubMenu = subMenu;
    }
  }

  isSubMenuOpen(subMenu: string): boolean {
    return this.activeSubMenu === subMenu;
  }
  logout() {
    this.authService.doLogout()
  }
  clickEvent() {
    this.status = !this.status;
    //this.statusLink = !this.statusLink;

    if (this.statusLink) {
      setTimeout(() => {
        this.statusLink = false;
      }, 230);
    } else {
      this.statusLink = true;
    }
    console.log(this.status)
  }

}