import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { TreeSelectModule } from 'primeng/treeselect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-company',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TreeSelectModule,
    DropdownModule, 
    ButtonModule
  ],
  templateUrl: './add-company.component.html',
  styleUrl: './add-company.component.css'
})

export class AddCompanyComponent {
  tabs:any[] = ["Company Info","Shares Info","Directors","Company Secretary"];
  activeTabIndex = 0;
  companyInfoForm!: FormGroup;
  selectedNodes: string=""
  countries:any[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
];



  private fb = inject(FormBuilder)

  ngOnInit() {
    this.companyInfoForm = this.fb.group({
      companyNameEN:new FormControl('',[Validators.required]),
      companyNameCN:new FormControl('',[Validators.required]),
      companyType:new FormControl('',[Validators.requiredTrue]),
      selectedNodes:new FormControl('')
    })
  }


  changeTab(index: number){
     this.activeTabIndex = index  
  }
  submitCompanyInfo(){

  }
}
