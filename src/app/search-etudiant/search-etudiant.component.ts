import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Etudiant } from '../model/etudiant.model';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-search-etudiant',
  templateUrl: './search-etudiant.component.html',
  styleUrls: ['./search-etudiant.component.css'],
})
export class SearchEtudiantComponent implements OnInit {
  list_etu: Etudiant[];
  list_grp: Groupe[] = [];
  nomEtu: string = '';
  grpidRech: number = 0;
  minMoyRech: number = 0;
  maxMoyRech: number = 20;
  critere: string = 'nom';

  constructor(private studentServ: StudentService) {
    this.nomEtu = '';
    this.list_etu = studentServ.listStudents();
  }
  chercherParGroupe(id: number) {
    console.log(id);
    if (id == 0) {
      this.list_etu = this.studentServ.listStudents();
      return;
    }
    this.list_etu = this.studentServ.listStudents();
    this.list_etu = this.list_etu.filter((e) => e.grp.idgrp == id);
  }
  chercherParNom(name: string) {
    this.list_etu = this.studentServ.listStudents();
    this.list_etu = this.list_etu.filter((e) =>
      e.nom.toLowerCase().includes(name.toLowerCase())
    );
  }
  chercherParMoy(moyMin: number, moyMax: number) {
    this.list_etu = this.studentServ.listStudents();
    this.list_etu = this.list_etu.filter(
      (e) => e.moy >= moyMin && e.moy <= moyMax
    );
  }
  reset() {
    this.nomEtu = '';
    this.grpidRech = 0;
    this.list_etu = this.studentServ.listStudents();
    this.maxMoyRech = 20;
    this.minMoyRech = 0;
  }
  ngOnInit() {
    this.list_grp = this.studentServ.listGroups();
  }
}
