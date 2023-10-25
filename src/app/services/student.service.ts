import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  tab_etu: Etudiant[];
  constructor() {
    this.tab_etu = [
      {
        cin: 111,
        nom: 'Dridi',
        prenom: 'Nawel',
        dateNaiss: new Date('09/27/2002'),
        moy: 12.5,
      },
      {
        cin: 222,
        nom: 'Ben Hamda',
        prenom: 'Sami',
        dateNaiss: new Date('11/04/2002'),
        moy: 14.25,
      },
      {
        cin: 333,
        nom: 'Zaier',
        prenom: 'Manel',
        dateNaiss: new Date('02/15/2001'),
      },
      {
        cin: 444,
        nom: 'Fourati',
        prenom: 'Iyed',
        dateNaiss: new Date('06/24/2001'),
        moy: 9.88,
      },
      {
        cin: 445,
        nom: 'benslama',
        prenom: 'adem',
        dateNaiss: new Date('01/28/2003'),
        moy: 9.88,
      },
    ];
  }
  listStudents(): Etudiant[] {
    return this.tab_etu;
  }
  addStudent(etu: Etudiant) {
    this.tab_etu.push(etu);
  }
  delStudent(pos: number) {
    this.tab_etu.splice(pos, 1);
  }
}
