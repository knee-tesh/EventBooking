import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  eventData:any;
  searchText:string = '';
  constructor(private list:ListService,private router:Router) { }

  ngOnInit() {
    this.list.getList().subscribe(data =>{
      this.eventData = data;
    })
  }

  seatsCheck(count){
    count = parseInt(count);    
    let res = count > 0 ? true : false;
    return res;
  }

  redirect(data){
    this.router.navigate(['book',{name:data.name,seats:data.noOfSeatsAvailable}]);
  }

}
