import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardCompanyService {
  token:any=localStorage.getItem('token');
 
  constructor(private http:HttpClient) { }
  
  getchartData(resultdate:any):Observable<any>
  {
    console.log(resultdate)
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate='+resultdate.fdate+'&filterBy='+resultdate.type+'&tDate='+resultdate.tdate,

     {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
       
      }    
     } )
  }
  getleadchartData(resultdate:any):Observable<any>
  {
    console.log(resultdate)
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/lead-chart/load?fDate='+resultdate.fdate+'&filterBy=='+resultdate.type+'&month='+resultdate.month+'&tDate='+resultdate.tdate+'&year='+resultdate.year,

     {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
       
      }    
     } )
  }
  getinfluencechartData(resultdate:any):Observable<any>
  {
    console.log(resultdate)
    // const from ="2023-11-25";
    // return this.http.get('http://192.168.1.87:8083/api/v1/report/companyUser-chart/load?fDate=2023-02-02&filterBy==WTD&tDate=2023-03-04',
    return this.http.get('http://192.168.1.87:8083/api/v1/report/influenceVisit-chart/load?fDate='+resultdate.fdate+'&filterBy=='+resultdate.type+'&month='+resultdate.month+'&tDate='+resultdate.tdate+'&year='+resultdate.year,

     {
      headers : {
        'Authorization' : 'bearer' + this.token,
        'content-type':'application/json'
       
      }    
     } )
  }
}
