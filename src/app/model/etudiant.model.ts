import { Groupe } from './groupe.model';

export class Etudiant {
  cin!: Number;
  nom!: string;
  prenom!: string;
  dateNaiss!: Date;
  moy!: number;
  grp!: Groupe;
}
