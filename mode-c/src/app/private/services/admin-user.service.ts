import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  
  token : any = localStorage.getItem('token');

  constructor(private http:HttpClient) { }

  pendingRequests(status: boolean)
  {
return this.http.get('http://192.168.1.87:8083/api/v1/admin/companyUser-approval/'+status, {
  headers : {
    'Authorization' : 'bearer' + this.token,
    'content-type':'application/json'

  }
});
  }
  activeRequests()
  {
    console.log('active ' + this.token)
    return this.http.get('http://192.168.1.87:8083/api/v1/admin/usersByStatus/true',
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });
  }
  updateUserRequest(id:number,status:boolean)
  {
   
    return this.http.post('http://192.168.1.87:8083/api/v1/admin/user-approval/'+id+'/'+status,
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });
    
    
  }
  deleteActiveUsers(id:number)
  {
   
    return this.http.delete('http://192.168.1.87:8083/api/v1/admin/user-approval/'+id+'false',
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });
  }
  acceptRequest(id:number)
  {

    return this.http.delete('http://192.168.1.87:8083/api/v1/admin/user-approval/'+id+'true',
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });

  }
  getAdminById(id:number)
  {
    return this.http.delete('http://192.168.1.87:8083/api/v1/user/find/'+id+'true',
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });

  }

  
  
}
