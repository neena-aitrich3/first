import { Component } from '@angular/core';
import { AdminUserService } from '../../services/admin-user.service';
import { UserModel } from '../../model/users';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  // add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal]
})
export class UsersListComponent {
  pendingRequests:any;
  name:string=""
  id!:number
  country:string =""
  state:string=""
  city:string=""
  phone:string=""
  show:boolean=false;
  token:any;
  userById:UserModel | undefined;

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
    console.log("hai");
    // this.adminUserService.pendingRequests(false).subscribe((data)=>
    //   {
    //       this.pendingRequests=data;
    //       console.log(this.pendingRequests);
    //   })
    this.pending();
  }

  pending()
{
  this.adminUserService.pendingRequests(false).subscribe((data)=>
  {
      this.pendingRequests=data;
      console.log(this.pendingRequests);
  })

}

  deleteRequest(id:number,status:boolean)
  {
    
  this.adminUserService.updateUserRequest(id,status).subscribe(data=>{
    window.location.reload();
    console.log(data);
  });
    
  }

  accept(id:number)
  {
    this.adminUserService.acceptRequest(id);
  }
  onTableDataChange(event:any)
  {
   
    this.page=event;
    this.pending();
  }

}
