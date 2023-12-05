import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Compte } from '../model/compte.model';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent {
  user: Compte = new Compte();
  error: boolean = false;
  constructor(private authServ: AuthService, private router: Router) {
    if (authServ.isConnected) router.navigate(['etudiants']);
  }
  connected() {
    let permission: boolean = this.authServ.connect(this.user);
    console.log(this.user); // on se connecte avec user
    console.log('Tentative de connexion :' + this.user.email);
    if (permission)
      // on navigue vers la liste des
      this.router.navigate(['dash']);
    else this.error = true;
  }
  reset() {
    this.error = false; // on n’a plus d’erreur
  }
}
