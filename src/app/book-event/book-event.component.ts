import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PipeTransform, Pipe } from '@angular/core'

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.scss']
})
export class BookEventComponent implements OnInit {
  name:string;
  seats:any;

  userName:string;
  email:string;
  phone:any;
  seatCount:number=2;
  aFlag:boolean=false;
  attendees:any=[];

  constructor(private r: ActivatedRoute,private route:Router) { 
    r.url.subscribe((u) => {
      this.name = r.snapshot.params.name;
      this.seats = r.snapshot.params.seats;
    });
  }

  ngOnInit() {

  }

  myFunc(count){
    this.attendees = [];
    for(let i=0;i<count;i++){
      this.attendees.push('');
    }
    this.aFlag = true;
  }

  onSubmit(f) {
    console.log(f,this.userName,this.email,this.phone,this.seatCount,this.attendees)
  }
  redirect(){
    this.route.navigate(['']);
  }
}

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {
  transform(value:any): any {
    let values = [];
    if(!value) return [];
    for (let i=0; i<value;i++) {
      values.push(i+1);
    }
    return values;
  }
}