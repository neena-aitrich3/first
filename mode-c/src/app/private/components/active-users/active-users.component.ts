import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserModel } from '../../model/users';
import { AdminUserService } from '../../services/admin-user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'], 
   // add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal]
})
export class ActiveUsersComponent {

pendingRequests:any;
  fname:string=""
 
  lname:string =""
  userName:string=""
  phoneNo:string=""
  // phone:string=""
// image:string="";
  image:string="../assets/images/img2.png"
  show:boolean=false;
  token:any;

  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes:any=[5,10,15,20,25,30];

  constructor(private adminUserService:AdminUserService,config: NgbModalConfig, private modalService: NgbModal){
    	// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
    this.token=sessionStorage.getItem('token');
  }

  ngOnInit()
  {
  this.active();    
  }

  active()
  {
    this.adminUserService.pendingRequests(true).subscribe((data)=>
      {
          this.pendingRequests=data;
          console.log(this.pendingRequests);
      })

  }
  viewUser(content:any,list:UserModel)
  {
    console.log(list.firstname);
    // alert(data.id);
    this.show=! this.show;
    this.modalService.open(content);
   this.fname=list.firstname;
   this.lname=list.lastname;
   this.userName=list.userName;
   this.phoneNo=list.phoneNo;
  }
  deleteActiveUser(id:number)
  {

    this.adminUserService.deleteActiveUsers(id).subscribe(data=>{
      window.location.reload();
  })
}

onTableDataChange(event:any)
{
 
  this.page=event;
  this.active();
}
}
