import { Component } from '@angular/core';
import { DashboardCompanyService } from '../../services/dashboard-company.service';
import { Filtermodel } from '../../model/filtermodel';
import { _DeepPartialArray } from 'chart.js/dist/types/utils';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-influence-chart',
  templateUrl: './influence-chart.component.html',
  styleUrls: ['./influence-chart.component.css']
})
export class InfluenceChartComponent {
  yesterday:string | undefined
  // dateOne = new Date('2023-01-03')
   //dateTwo = new Date('2023-03-03')
  //  Date_to_check = "2023-01-10";
  value1: any;
  chart!:Chart
  
 // define "lord-icon" custom element with default properties
 //defineElement(lottie.loadAnimation);
 
 
  entities = [
    { id: 0, name: '-Select-' },
    { id: 1, name: 'TODAY' },
    { id: 3, name: 'WTD' },
    { id: 4, name: 'MTD' },
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
   result:any | undefined;
 
 data:any;
 barchart:any;
 day:string | undefined;
 //.............https://www.npmjs.com/package/typescript-calendar-date/v/1.3.1
 
 viewDay(event:any){
  const arr = event.target.value;
 
  //alert("sucess"+" "+arr)
  console.log("Selected Option Is "+arr)
  var obj:Filtermodel=new Filtermodel() ;
  
  
 var DateToCheck : any =new Date();
  switch (arr) {
    case 'TODAY':
      //alert("It is Option-Today");
      //console.log("It is Option-Today");
       
        DateToCheck= new Date()
        obj.fdate=new Date().toISOString().slice(0, 10).toString();
        obj.type='TODAY';
        obj.tdate=new Date().toISOString().slice(0, 10).toString();
        //obj.year=obj.tdate.getFullYear();
        obj.year=DateToCheck.getUTCFullYear();
        obj.month = DateToCheck.getUTCMonth() + 1;
        this.abc=obj.fdate;
       // alert(obj.year+" "+obj.month)
        
        break ;
    case 'YESTERDAY':
      //alert("It is Option-Yeterday");
       // console.log("It is Option-Yesterday");
       
        const today = new Date();
        const yesterday1 = new Date(today);
        yesterday1.setDate(today.getDate() - 1);
        
        //alert(yesterday);
        obj.fdate=yesterday1.toISOString().slice(0, 10).toString();
        obj.type='YESTERDAY';
        obj.tdate=yesterday1.toISOString().slice(0, 10).toString();
    alert(obj.fdate+"-"+obj.tdate)
    this.abc=(yesterday1.toLocaleDateString('en-GB').slice(0, 10).toString());
    obj.year=DateToCheck.getFullYear();
    obj.month = DateToCheck.getUTCMonth() + 1;
        break;
    case 'WTD':
      //alert("It is Option-WTD");
      // console.log("It is Option-Week.");
        
        let today1 = new Date();
        const dayOfWeek = today1.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const startDate = new Date(today1);
        startDate.setDate(today1.getDate() - dayOfWeek);
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);
        
        alert(startDate.toLocaleDateString('en-GB').slice(0, 10).toString()+" - "+endDate.toLocaleDateString('en-GB').slice(0, 10).toString()); // Output: start date of the week in local date format
        // Output: end date of the week in local date format
 
        obj.fdate=startDate.toISOString().slice(0, 10).toString();
        obj.type='WTD';
        obj.tdate=endDate.toISOString().slice(0, 10).toString();
        this.abc=(startDate.toLocaleDateString('en-GB').slice(0, 10).toString()+" - "+endDate.toLocaleDateString('en-GB').slice(0, 10).toString());
       
        obj.year=DateToCheck.getUTCFullYear();
        obj.month = DateToCheck.getUTCMonth() + 1;
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
        
      this.abc=monthName;
      obj.year=DateToCheck.getUTCFullYear();
      obj.month = DateToCheck.getUTCMonth() + 1;
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
  
  }
  
  viewresultchart(resultdate : any){
    console.log(resultdate);
  
    this.dashboardCompanyService.getinfluencechartData(resultdate).subscribe(data => {
      // Create chart data
      //alert(data.company);
      
      console.log(data)
      const chartData = {
       
        labels: [data.lostVisit],
        title:"REgistration count",
        responsive: true,
        
        datasets: [
          {
            label:'lostVisit',
            data: [data.lostVisit],
            backgroundColor: [ "#C2B1AB","#36A2EB","#FFCE56"],
           //  fill: false,
            //borderColor: 'rgb(175, 192, 192)',
            tension: 0.1 // a new option to curve the line chart-tension more beauty
          },
          {
            label:'openVisit',
            data: [data.openVisit],
            backgroundColor: ["#D291BC","#36A2EB","#FFCE56"],
            barThickness: 50, 
           // data: ['467','576', '572', '79', '92','574', '573', '576'],
            //dataPoints:data.admin,
           //  fill: false,
           // borderColor: '#ff0000',
            tension: 0.1 // a new option to curve the line chart-tension more beauty
          },
          {
            label:'totalVisit',
            data: [data.totalVisit],
            backgroundColor: ["#9BD1A7","#36A2EB","#FFCE56"],
            barThickness: 50, 
           // data: ['300','700', '600', '179', '82','92', '573', '556'],
            //dataPoints:data.user,
            fill: false,
           // borderColor: 'rgb(90, 192, 192)',
            tension: 0.1 // a new option to curve the line chart-tension more beauty
          },
          {
           label:'wonVisit',
           data: [data.wonVisit],
           backgroundColor: ["#FF9991","#36A2EB","#FFCE56"],
         //  data: ['300','700', '600', '179', '82','92', '573', '556'],
           //dataPoints:data.user,
           fill: false,
          // borderColor: 'rgb(90, 192, 192)',
           tension: 0.1 // a new option to curve the line chart-tension more beauty
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
     this.chart  = new Chart('myChart2', {
        
        type: 'bar',
        data: chartData,
        
        options: {
          scales: {
              y: {
                  //beginAtZero: true,
                  title: { text: 'Registration Count', display: true }, 
                  display: true 
 
              } ,
               x: { 
                title: { text: this.abc, display: true },
               // labels:['jan 1','feb 1']
               labels:data.abc
               
               } ,
               
               
          },
          
          responsive: true,
         
            
      }
      });
     }
    });
    
 
 }
 
 }