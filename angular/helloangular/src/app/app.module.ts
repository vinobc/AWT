import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpPicsComponent } from './emp-pics/emp-pics.component';
import { FindEmployeePipe } from './find-employee.pipe';
import { AboutEmpComponent } from './about-emp/about-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpPicsComponent,
    FindEmployeePipe,
    AboutEmpComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
