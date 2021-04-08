import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() sendTitle = new EventEmitter();

  monTitre: string;

  constructor() { }

  ngOnInit(): void {
  }

  mettreAJourTitreParent(){
    this.sendTitle.emit(this.monTitre);
  }
}
