import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeevService } from '../geev.service';
import { Update } from '../update';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any = [];

  // lastUpdate = new Promise((resolve, reject) => {
  //   const date = new Date();
  //   setInterval(
  //     () => {
  //       resolve(date);
  //     }, 1000
  //   );
  // });

  constructor(private geevService: GeevService) { }

  ngOnInit() {
    this.getGeev();
    console.log(this.data);
  }

  getGeev(): void {
    this.geevService.getGeev()
      .subscribe(d => this.data = d.slice(0, 5));
  }

  // ngOnDestroy() {
  //   clearInterval(this.data);
  //   console.log(this.data);
  // }

  // getGeev(): void {
  //   setInterval(() => {
  //     this.geevService.getGeev()
  //       .subscribe(d => this.data = d.slice(0, 5));
  //   }, 1000)
  // }
}
