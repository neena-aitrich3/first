import { BaseChartDirective} from 'ng2-charts'
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartDataset,ChartOptions, registerables, Title } from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { DashboardCompanyService } from '../../services/dashboard-company.service';
import { Filtermodel } from '../../model/filtermodel';
import { _DeepPartialArray } from 'chart.js/dist/types/utils';
//import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit{
  yesterday:string | undefined
   dateOne = new Date('2023-01-03')
   dateTwo = new Date('2023-03-03')
    Date_to_check = "2023-01-10";
    chart!:Chart;
  value1: any;
  
  entities = [
    { id: 0, name: '-Select-' },
    { id: 1, name: 'TODAY' },
    //{ id: 2, name: 'YESTERDAY' },
    { id: 3, name: 'WTD' },
    { id: 4, name: 'MTD' },
   // { id: 5, name: 'CUSTOM' },
  ];
  abc: string | _DeepPartialArray<string> | undefined;


//@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined
//private sub!:Subscription;
  //public chartData:ChartDataset[]=[
   // {data: [], label: 'Data 1', backgroundColor: '#8B5EB3',borderRadius: 20},
  //  {data: [], label: 'Data 2', backgroundColor: '#BEEE5D',borderRadius: 20},
  //];
  //public labels : string[]=['January', 'February','March','April','May'];
  //public options:ChartOptions={};

  constructor( private dashboardCompanyService: DashboardCompanyService){}
 

  now:Date= new Date();
  


   //days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
   //firstmonths=['January','Februry','March','April','May','June'];
   //secondmonth=['July','Augest','September','October','November','December'];
   result:any | undefined;


data:any;
barchart:any;
day:string | undefined;
//.............https://www.npmjs.com/package/typescript-calendar-date/v/1.3.1

viewDay(event:any){
  const arr = event.target.value;
 
  //console.log("Selected Option Is "+arr)
var obj:Filtermodel=new Filtermodel() ;
var DateToCheck : any ;
  switch (arr) {
    case 'TODAY':
        DateToCheck= new Date()
        obj.fdate=new Date().toISOString().slice(0, 10).toString();
        obj.type='TODAY';
        obj.tdate=new Date().toISOString().slice(0, 10).toString();
        this.abc=obj.fdate;
        break ;
    case 'YESTERDAY':
        const today = new Date();
        const yesterday1 = new Date(today);
        yesterday1.setDate(today.getDate() - 1);
        
        obj.fdate=yesterday1.toISOString().slice(0, 10).toString();
        obj.type='YESTERDAY';
        obj.tdate=yesterday1.toISOString().slice(0, 10).toString();
    alert(obj.fdate+"-"+obj.tdate)
    this.abc=(yesterday1.toLocaleDateString('en-GB').slice(0, 10).toString());

        break;
    case 'WTD':
      //alert("It is Option-WTD");
      // console.log("It is Option-Week.");
        
        const today1 = new Date();
        const dayOfWeek = today1.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const startDate = new Date(today1);
        startDate.setDate(today1.getDate() - dayOfWeek);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        
       // alert(startDate.toLocaleDateString('en-GB').slice(0, 10).toString()+" - "+endDate.toLocaleDateString('en-GB').slice(0, 10).toString()); // Output: start date of the week in local date format
        // Output: end date of the week in local date format

        obj.fdate=startDate.toISOString().slice(0, 10).toString();
        obj.type='WTD';
        obj.tdate=endDate.toISOString().slice(0, 10).toString();
        this.abc=(startDate.toLocaleDateString('en-GB').slice(0, 10).toString()+" - "+endDate.toLocaleDateString('en-GB').slice(0, 10).toString());

        break;
    case 'MTD':
        //alert("It is Option-MTD");
        //  console.log("It is a Month.");
        const today2 = new Date();
        const monthName = today2.toLocaleString('default', { month: 'long' });
        //alert(monthName); // output: March

        const today3 = new Date();
        const firstDayOfMonth = new Date(today3.getFullYear(), today3.getMonth(), 1);
        const lastDayOfMonth = new Date(today3.getFullYear(), today3.getMonth() + 1, 0);
        obj.fdate=firstDayOfMonth.toISOString().slice(0, 10).toString();
        obj.type='MTD';
        obj.tdate=lastDayOfMonth.toISOString().slice(0, 10).toString();
        //alert( obj.fdate);
     // alert( obj.tdate);
      this.abc=monthName;

        break;
    case 'CUSTOM':
      //alert("It is Option-Custom");
       // console.log("It is a Custom.");
        break;
   
    default:
        console.log("No such option exists!");
        break;
}
  this.day=event
  // this.viewresultchart(this.day)
  this.viewresultchart(obj)
}

fooFunction(i: number, entityName: string){
  console.log(`${i} - ${entityName}`);
}

//-------------------------------------------------------------

  ngOnInit() {
   // Chart.register(...registerables);
//  this.viewresultchart();


   //alert(this.dateOne+" and"+this.dateTwo)
//  console.log(this.dateOne);
//  console.log(this.dateTwo);
 //alert(this.now.getMonth());
 //alert(this.now.toLocaleDateString("en-US"));
  }
  
  viewresultchart(resultdate : any){
    console.log(resultdate);
  
    this.dashboardCompanyService.getchartData(resultdate).subscribe(data => {
      // Create chart data
      //alert(data.company);
      //console.log(data);
      //labels: ['jan 1','feb1']
      console.log(data)
      const chartData = {
        
        labels: data.user,
       // labels:this.barchart[0],
        title:"REgistration count",
        responsive: true,
        
        datasets: [
          {
            
            label: 'Company User',
            data: data.company,
           dataPoints:data.companyUser,
            fill: false,
            tension: 0.1 ,
            barPercentage: 0.5,
            //barThickness: 40, 
            //categoryPercentage: 0.3// a new option to curve the line chart-tension more beauty
          },
          {
            label: 'Admin User',
            data: data.adminUser,
           // data: ['467','576', '572', '79', '92','574', '573', '576'],
            //dataPoints:data.admin,
            fill: false,
           tension: 0.1 ,
           barPercentage: 0.5,
           //categoryPercentage: 0.3// a new option to curve the line chart-tension more beauty
           //barThickness: 40,
          },
          {
            label: ' User',
            data: data.user,
           // data: ['300','700', '600', '179', '82','92', '573', '556'],
            //dataPoints:data.user,
            fill: false,
            tension: 0.1 ,// a new option to curve the line chart-tension more beauty
           barPercentage: 0.5,
           //categoryPercentage: 0.3
           //barThickness: 40,
           
          }
         
        ]
      };
    
  
      // Create the chart
      if(this.chart!=undefined){
        this.chart.config.data=chartData;
        this.chart.update();
      }
      else
      {
      this.chart = new Chart('myChart', {
        
        type: 'bar',
        data: chartData,
        options: {
          scales: {
                y: {
                  //beginAtZero: true,
                  title: { text: 'Registration Count', display: true }, 
                 // stacked: true, 
                  display: true 
                   } ,
                x: { 
                    title: { text:this.abc, display: true },
                //stacked: true,
               // labels:['jan 1','feb 1']
              // labels:data.abc,
               
               //barPercentage: 0.4
              
               
               } ,
               
          },
          responsive: true,
         
      }
      });
    }
    });
    
 
}

}