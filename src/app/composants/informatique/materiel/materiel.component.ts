import { Component, OnInit,Input } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';

@Component({
  selector: 'sam-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
@Input("tab")t:Materiel;
  constructor() { }

  ngOnInit(): void {
  }

}
