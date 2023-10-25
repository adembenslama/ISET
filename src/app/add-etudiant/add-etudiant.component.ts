import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css'],
})
export class AddEtudiantComponent {
  newEtu: Etudiant;

  constructor(private studentServ: StudentService) {
    this.newEtu = new Etudiant();
  }
  ajouterEtudiant() {
    console.log(this.newEtu);
    this.studentServ.addStudent(this.newEtu);
    console.log('success');
    this.newEtu = new Etudiant();
  }
}
