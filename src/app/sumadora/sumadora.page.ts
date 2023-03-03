import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  suma:string = "";
  numero1:string = "";
  numero2:string = "";

  constructor() { }

  Calcular(){
    this.suma = (parseInt(this.numero1)+(parseInt(this.numero2))).toString();
  }


  ngOnInit() {
  }

}
