import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminCompanyService {

  token:any=localStorage.getItem('token');

  constructor(private http:HttpClient) { }

  getCompany()
  {
    return this.http.get('http://192.168.1.87:8083/api/v1/company/status/'+false,
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }    
     } )
  }

  getCompanyactive(){
    // return this.http.get('http://192.168.1.87:8083/api/v1/company/status/'+true,
    return this.http.get('http://192.168.1.87:8083/api/v1/company/all',
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }    
     } )
  }


  acceptCompany(id:string)
  {

    return this.http.post('http://192.168.1.87:8083/api/v1/admin/companyUser-approval/'+id+'/'+'true',
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });


  }


  //delete from company request list
  deleteRequest(id:number)
  {
   
    return this.http.delete('http://192.168.1.87:8083/api/v1/admin/'+id,
    {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
      }
    });
    
    
  }
  

}
