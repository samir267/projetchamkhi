import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private servicemat:MaterielService,private route:ActivatedRoute,private router:Router) {}
  onaffiche()
  {
    this.affichage = !this.affichage; 
  }
  onretour(){
    this.router.navigate(['/informatique']);
  }
  
  ngOnInit(): void {this.materiel=this.servicemat.getmaterielById(this.route.snapshot.params['id']);
  }

}
