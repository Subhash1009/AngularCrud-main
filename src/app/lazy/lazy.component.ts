import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent {
  title: any = 'Async Programming Demo'

  message: string = '';
  constructor(private dataService: DataService, private router: Router) {}

  async loadData() {
    try {
      this.message = await this.dataService.fetchData();   //Await is used to hold the response for a particualr period of time
      console.log("after await");
    } catch (error) {
      console.error(error);
    }
  }
}

