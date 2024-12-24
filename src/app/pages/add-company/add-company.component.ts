import { Component } from '@angular/core';

@Component({
  selector: 'app-add-company',
  imports: [],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})
export class AddCompanyComponent {
  tabs = ["Company Info","Shares Info","Directors","Company Secretary"];
  currentTabIndex = 0;

  changeTab(index: number){
     this.currentTabIndex = index  
  }
}
