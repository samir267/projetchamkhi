import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'sam-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

@Input() com:Commentaire=new Commentaire();


  constructor() { }

  ngOnInit(): void {
  }

}
