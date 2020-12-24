import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'sam-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input("tab")t:Materiel;
id:Number; 
constructor(private activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];

  }

}
