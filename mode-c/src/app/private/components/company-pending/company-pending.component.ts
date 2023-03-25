import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
// import { UserModel } from 'New folder/src/app/private/model/users';
import { Company } from '../../model/company';
import { AdminCompanyService } from '../../services/admin-company.service';

@Component({
  selector: 'app-company-pending',
  templateUrl: './company-pending.component.html',
  styleUrls: ['./company-pending.component.css']
})

export class CompanyPendingComponent {
  companyPending: any ;
  fname:string="" 
  lname:string =""
  userName:string=""
  phoneNo:string=""
  show:boolean=false;

  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes:any=[5,10,15,20,25,30];

  companyName: string | undefined;
  companyAddress: string | undefined;
  companyEmailAddress: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  role: string | undefined;

  constructor(private compService:AdminCompanyService,config: NgbModalConfig, private modalService: NgbModal){}

  ngOnInit()
  {
    this.pending();
  }

  pending(){
    this.compService.getCompany().subscribe(data=>
      {
        this.companyPending=data;
        console.log(this.companyPending);
        })
  }

  
  acceptCompany(userId:string)
  {

    this.compService.acceptCompany(userId).subscribe(data=>
      {
        window.location.reload();
        alert("accepted"+" "+data);
      })
    

  }
  //deletebutton
  deleteRequest(id:number)
  {
    
  this.compService.deleteRequest(id).subscribe(data=>{
    window.location.reload();
    console.log(data);
  });
    
  }

  onTableDataChange(event:any)
  {
    this.page=event;
    this.pending();
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
}
