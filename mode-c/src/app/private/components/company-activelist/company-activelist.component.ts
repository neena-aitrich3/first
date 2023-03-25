import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Company } from '../../model/company';
import { AdminCompanyService } from '../../services/admin-company.service';

@Component({
  selector: 'app-company-activelist',
  templateUrl: './company-activelist.component.html',
  styleUrls: ['./company-activelist.component.css']
})
export class CompanyActivelistComponent {
  companyactive: any ;

  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes:any=[5,10,15,20,25,30];
  
  show: boolean | undefined;
  companyName: string | undefined;
  companyAddress: string | undefined;
  companyEmailAddress: string | undefined;
  emailAddress: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  role: string | undefined;

  constructor(private compService:AdminCompanyService,config: NgbModalConfig, private modalService: NgbModal) {}

  ngOnInit()
  {
    this.active();    

  }
  active()
  {
    this.compService.getCompanyactive().subscribe(data=>
      {
        this.companyactive=data;  
        console.log(this.companyactive); 
        })
  }



  //viewbutton company details..........................
  viewUser(content:any,list:Company)
  {
    console.log(list.firstname);
    // alert(data.id);
    this.show=! this.show;
    this.modalService.open(content);
   this.companyName=list.companyName;
   this.companyAddress=list.companyAddress;
   this.companyEmailAddress=list.companyEmailAddress;
   this.firstName=list.firstName;
   this.lastName=list.lastName;
  this.role=list.role;
   
  }
  deleteActiveUser(id:number)
  {

   // this.compService.deleteActiveUsers(id).subscribe(data=>{
   //   window.location.reload();
 // })
}

  onTableDataChange(event:any)
  {
    this.page=event;
    this.active();
  }


}
