import { Component, OnInit } from '@angular/core';
import { DashboardCompanyService } from '../../services/dashboard-company.service';
import { Chart ,registerables } from 'chart.js'
Chart.register(...registerables);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  result!:any;

  token:any;
  loader=true;
  constructor(private dashService:DashboardCompanyService){
    this.token=sessionStorage.getItem('token');
   
  }
  
  ngOnInit() {
    this.getchart();
    setTimeout(()=>
    {
this.loader=false
    },4000)
   
  }

  getchart(){
    // this.dashService.getchartData().subscribe(data=>
    //   {
    //     this.result=data;
    //     console.log(this.result);
    //     //this.companyPending=data;
    //    // console.log(this.companyPending);
    //     })
  }
  

  public textShow1 = false;
  public textShow2 = false;
  public textShow3 = false;
  showChart1(){
   this.textShow1 = true;
  }
  hideChart1(){
   this.textShow1 = false;
  }
  showChart2(){
    this.textShow2 = true;
   }
   hideChart2(){
    this.textShow2 = false;
   }
   showChart3(){
    this.textShow3 = true;
   }
   hideChart3(){
    this.textShow3 = false;
   }
  }