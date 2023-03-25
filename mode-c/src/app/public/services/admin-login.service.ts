import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminLogin } from '../model/admin-login';


@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

   url:string ="http://192.168.1.87:8080/realms/mode-c/protocol/openid-connect/token";
   token:boolean | undefined;
   islogined: boolean = false;
  //  http:any;
  constructor(private http:HttpClient) { 

  }

  adminLogin(username:string,password:string) {
    return true
  }
//   {
  
    
//    console.log("hi"+username+ password
//    );
   
//     const header = new HttpHeaders(
//       {
//         // client_id:'mod-c-admin',
//         // client_secret:'najiffjHkoEie1Bv3KewxTVmbDGdVRUJ',
//         // grant_type:'password',
//         // contentType: 'x-www-form-urlencoded'
//         contentType: 'application/x-www-form-urlencoded'
      
  
//     })

//     var httpss  = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin', 'origin');

//     const body  = {
//         // 'client_id':'mod-c-admin',
//         'client_secret':'VWDBUDxyM5Chs8D3aYbeNtrZsNOdsD2v',
//         'grant_type':'password',
//         'username':username,
//         'password':password
  
//     }
   
//     const data = {
//       username: 'admin',
//       password: 'easy',
//       grant_type: 'password',
//       client_secret:'VWDBUDxyM5Chs8D3aYbeNtrZsNOdsD2v',
//       }
   
    


//    this.http.post(this.url,data,{headers: {
//     'Content-Type' : 'application/x-www-form-urlencoded'
    
//    }}).subscribe((data: any)=>
//     {
//       alert("hello");
//       console.log(data);
//      this.islogined = true;
//     })
//     return this.islogined;
//   // return true;
//   // / / 
//   //   // if(adminLoginModel.email=="admin@gmail.com" && adminLoginModel.password=="1234")
//   //   // {
//   //   // sessionStorage.setItem('token',"sdfsdfdsfdsdfsdf543tsde45rdgfgdfg");
//   //   //   return true;
//   //   // }

//     // if(res.status=="true"){
// //   sessionStorage.setItem('token')=res.token;
// }


  
  


// //   }
// // }


// // function getToken(): string {
// //  //return sessionStorage.getItem('token');
// //  return "ghfjhfjhjsgdcksdkgcksd";
// }

}

