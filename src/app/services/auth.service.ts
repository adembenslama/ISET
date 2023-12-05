import { Injectable } from '@angular/core';
import { Compte } from '../model/compte.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isConnected: boolean = false;
  userCourant: string | null = '';
  role: string | null = '';
  users: Compte[];
  constructor(private router: Router) {
    this.users = [
      {
        email: 'admin@gmail.com',
        motDePasse: 'azerty',
        nom: 'Administrateur',
        role: 'ADMIN',
      },
      {
        email: 'agent@gmail.com',
        motDePasse: 'aqwzsx',
        nom: 'AGENT',
        role: 'AGENT',
      },
    ];
    this.isConnected = localStorage.getItem('isConnected') == 'true';
    this.userCourant = localStorage.getItem('userCourant');
    this.role = localStorage.getItem('role');
  }
  connect(user: Compte): boolean {
    this.users.forEach((unUser) => {
      if (
        user.adresse == unUser.adresse &&
        user.motDePasse == unUser.motDePasse
      ) {
        //vérifier email et mot de passe
        this.isConnected = true;
        this.userCourant = unUser.nom;
        this.role = unUser.role;
        console.log('Connexion de ', unUser.nom, ' - role :', unUser.role);
        localStorage.setItem('userCourant', this.userCourant); // stocker userCourant dans localStorage
        localStorage.setItem(
          'isConnected',
          this.isConnected ? 'true' : 'false'
        ); // stocker isConnected dans localStorage
        localStorage.setItem('role', unUser.role);
        this.router.navigate(['dash']);
      }
    });
    console.log(
      'isConnected local storage : ',
      localStorage.getItem('isConnected')
    );
    console.log('userCourant local storage : ');
    console.log('isConnected : ', this.isConnected);
    console.log('userCourant : ', this.userCourant);
    return this.isConnected;
  }
  disconnect() {
    this.isConnected = false;
    this.userCourant = '';
    this.role = '';
    this.router.navigate(['']); // naviguer vers la page de connexion
    localStorage.removeItem('userCourant'); // supprimer userCourant de localStorage
    localStorage.removeItem('isConnected'); // supprimer isConnected de localStorage
    localStorage.removeItem('role');
  }
  testerAdmin(): boolean {
    if (this.role == 'ADMIN') return true;
    else return false;
  }
  calculNbUsers() {
    return this.users.length; // retourne la
  }
  putUser(username: string, role: string) {
    localStorage.setItem('userCourant', username);
    localStorage.setItem('role', role);
    localStorage.setItem('isConnected', 'true');
    this.userCourant = username;
    this.isConnected = true;
    this.role = role;
    console.log('new user :: ' + username + role);
  }
  removeUser() {
    localStorage.removeItem('userCourant');
    localStorage.removeItem('isConnected');
    localStorage.removeItem('role');
    this.role = '';
    this.isConnected = false;
    this.userCourant = '';
  }
}
