import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Etudiant } from '../model/etudiant.model';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: [],
})
export class UpdateEtudiantComponent implements OnInit {
  etudiantCourant = new Etudiant();
  groups: Groupe[] = this.studentServ.listGroups();
  idGrpModified: Number = 0;
  constructor(
    private actRoute: ActivatedRoute,
    private studentServ: StudentService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.etudiantCourant = this.studentServ.viewStudent(
      this.actRoute.snapshot.params['num']
    );
    console.log(this.etudiantCourant);
    this.idGrpModified = this.etudiantCourant.grp.idgrp;
  }

  modifEtudiant() {
    this.etudiantCourant.grp = this.studentServ.viewGroupe(this.idGrpModified);
    this.studentServ.updateStudent(this.etudiantCourant);
    console.log('Modification avec succes !');
    this.route.navigate(['etudiants']);
  }
}
