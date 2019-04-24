import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {
  greet: string;
  employee: object;
  this_e: object;

  displayEmployee(evt,emp) {
    // console.log(evt);
    this.greet =  'Welcome ' + emp.name;
    emp.bg = !emp.bg;
    this.this_e = emp;
  }

  constructor(private http: HttpClient) {
    // this.greet = 'Welcome';
    this.greet = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/emp.json').subscribe(
    empInfo => {
      this.employee = empInfo;
    })
  }
}
