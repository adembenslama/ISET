import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  nbEtu: number;
  nbGrp: number;
  avgMoy: number;
  nbUsers: number;
  constructor(
    private studentServ: StudentService,
    private authServ: AuthService
  ) {
    this.nbEtu = studentServ.getNbStudents();
    this.nbGrp = studentServ.getNbGroups();
    this.avgMoy = studentServ.getAvgMoyennes();
    this.nbUsers = authServ.calculNbUsers();
  }
}
