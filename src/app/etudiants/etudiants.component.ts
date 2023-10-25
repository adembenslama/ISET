import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css'],
})
export class EtudiantsComponent implements OnInit {
  tab_etu: Etudiant[];
  constructor(private studentService: StudentService) {
    this.tab_etu = studentService.listStudents();
  }
  supprimerEtudiant(e: Etudiant) {
    let rep = confirm(
      'Etes-vous sûr de vouloir supprimer  ' + e.prenom + ' ' + e.nom + '?'
    );
    if (rep) {
      let pos = this.tab_etu.indexOf(e);
      this.studentService.delStudent(pos);
      console.log('Suppression avec succes :' + pos);
    }
  }
  ngOnInit(): void {}
}
