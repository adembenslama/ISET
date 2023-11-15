import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Groupe } from '../model/groupe.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  tab_etu: Etudiant[];
  tab_grp: Groupe[];
  constructor() {
    this.tab_etu = [
      {
        cin: 111,
        nom: 'Dridi',
        prenom: 'Nawel',
        dateNaiss: new Date('09/27/2002'),
        moy: 12.5,
        grp: {
          idgrp: 3,
          nomGrp: 'DSI23',
          parcours: "Développement des Systèmes d'Information",
        },
      },
      {
        cin: 222,
        nom: 'Ben Hamda',
        prenom: 'Sami',
        dateNaiss: new Date('11/04/2002'),
        moy: 14.25,
        grp: {
          idgrp: 5,
          nomGrp: 'SEM21',
          parcours: 'Systèmes Embarqués et Mobiles',
        },
      },
      {
        cin: 333,
        nom: 'Zaier',
        prenom: 'Manel',
        dateNaiss: new Date('02/15/2001'),
        grp: {
          idgrp: 1,
          nomGrp: 'DSI21',
          parcours: "Développement des Systèmes d'Information",
        },
        moy: 8,
      },
      {
        cin: 444,
        nom: 'Fourati',
        prenom: 'Iyed',
        dateNaiss: new Date('06/24/2001'),
        moy: 9.88,
        grp: {
          idgrp: 4,
          nomGrp: 'RSI21',
          parcours: 'Réseaux et Systèmes Informatiques',
        },
      },
    ];
    this.tab_grp = [
      {
        idgrp: 1,
        nomGrp: 'DSI21',
        parcours: "Développement des Systèmes d'Information",
      },
      {
        idgrp: 2,
        nomGrp: 'DSI22',
        parcours: "Développement des Systèmes d'Information",
      },
      {
        idgrp: 3,
        nomGrp: 'DSI23',
        parcours: "Développement des Systèmes d'Information",
      },
      {
        idgrp: 4,
        nomGrp: 'RSI21',
        parcours: 'Réseaux et Systèmes Informatiques',
      },
      { idgrp: 5, nomGrp: 'SEM21', parcours: 'Systèmes Embarqués et Mobiles' },
    ];
  }
  listStudents(): Etudiant[] {
    return this.tab_etu;
  }
  listGroups(): Groupe[] {
    return this.tab_grp;
  }
  addStudent(etu: Etudiant) {
    this.tab_etu.push(etu);
  }
  delStudent(e: Etudiant) {
    let pos = this.tab_etu.indexOf(e);
    this.tab_etu.splice(pos, 1);
  }
  viewStudent(num: Number): Etudiant {
    return this.tab_etu.find((e) => e.cin == num)!;
  }
  viewGroupe(num: Number): Groupe {
    return this.tab_grp.find((g) => g.idgrp == num)!;
  }
  updateStudent(e: Etudiant) {
    this.delStudent(e);
    this.addStudent(e);
    console.log(this.tab_etu);
  }
}
