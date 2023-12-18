import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements  OnInit{
  constructor() {
  }
  ngOnInit() {
  }

  public exit(){
    if(confirm('Voce quer sair?')){
      return true;
    }
    return false;
  }
}
