import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  isAdmin: boolean;
  constructor(public authServ: AuthService) {
    this.isAdmin = authServ.testerAdmin();
  }
  seDeconnecter() {
    this.authServ.disconnect();
  }
}
