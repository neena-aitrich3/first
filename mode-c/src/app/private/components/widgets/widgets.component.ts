import { Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {
  count1:number=0;
  count2:number=0;
  count3:number=0;
  count4:number=0;
  countstop1:any=setInterval(()=>{
    this.count1++;
    if(this.count1==125){
      clearInterval(this.countstop1)
    }
  },50)
  countstop2:any=setInterval(()=>{
    this.count2++;
    if(this.count2==92){
      clearInterval(this.countstop2)
    }
  },50)
  countstop3:any=setInterval(()=>{
    this.count3++;
    if(this.count3==89){
      clearInterval(this.countstop3)
    }
  },50)
  countstop4:any=setInterval(()=>{
    this.count4++;
    if(this.count4==78){
      clearInterval(this.countstop4)
    }
  },50)
// userscount=[
//   {    count1:'525',user1:'Active Users'  },
//   {    count1:'89.55%',user1:'Product Sales'  },
//   {    count1:'92%',user1:'Revenue'  },
//   {    count1:'25',user1:'Pending Company'  }]
}
