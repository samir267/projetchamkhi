import { Component, OnInit} from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';


@Component({
  selector: 'sam-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  affichage:boolean = true;
  materiel:Materiel;

   

  constructor(private servicemat:MaterielService) {}
  onaffiche()
  {
    this.affichage = !this.affichage; 
  }
  
  ngOnInit(): void {this.materiel=this.servicemat.getmaterielById("2");
  }

}
