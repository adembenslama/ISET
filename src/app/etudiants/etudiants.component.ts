import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css'],
})
export class EtudiantsComponent implements OnInit {
  tab_etu: Etudiant[];
  isAdmin: boolean;
  constructor(
    private studentService: StudentService,
    public auth: AuthService
  ) {
    this.isAdmin = auth.testerAdmin();
    this.tab_etu = studentService.listStudents();
  }
  supprimerEtudiant(e: Etudiant) {
    let rep = confirm(
      'Etes-vous sûr de vouloir supprimer  ' + e.prenom + ' ' + e.nom + '?'
    );
    if (rep) {
      this.studentService.delStudent(e);
      console.log('Suppression avec succes !');
    }
  }
  redoubleStyle = { color: 'red' };
  ngOnInit(): void {}
}
