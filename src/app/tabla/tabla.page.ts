import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  public numero:number = 0;

  public table:number[] = [];

  constructor() { 
    for(let i  = 0; i <= 13; i++){
      this.table.push(i);
    }
  }

  ngOnInit() {
  }

}
