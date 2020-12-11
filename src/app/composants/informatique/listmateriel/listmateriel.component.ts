import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'sam-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  titre:string="Nos produits en informatique";
  mat:Materiel[];


  constructor(private service:MaterielService) { }

  ngOnInit(): void {this.mat=this.service.getmateriels();
  }

}
