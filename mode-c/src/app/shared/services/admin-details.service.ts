import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDetailsService {

  token : any = localStorage.getItem('token');
  username : any = localStorage.getItem('logged_name');

  constructor(private http:HttpClient) { }

  getAdminDetails(username:string)
  {
    console.log('get admin'+ this.username + this.token)
    return this.http.get('http://192.168.1.87:8083/api/v1/admin/?UserName=admin',
    {
      // withCredentials: false,
      headers : {
        'Authorization' : 'bearer' + this.token,
        // 'content-type':'application/json',
      }
    });

  }

}
