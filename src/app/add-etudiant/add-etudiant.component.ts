import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { Groupe } from '../model/groupe.model';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css'],
})
export class AddEtudiantComponent {
  newEtu = new Etudiant();
  idGrp: number = 0;
  groups: Groupe[] = this.studentServ.listGroups();

  constructor(private studentServ: StudentService, private route: Router) {}
  ajouterEtudiant() {
    this.studentServ.addStudent(this.newEtu);
    this.newEtu.grp = this.studentServ.viewGroupe(this.idGrp);
    console.log(this.idGrp);
    this.route.navigate(['etudiants']);
  }
}
