import { Component, AfterViewInit, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LogInFormComponent } from "./log-in-form/log-in-form.component";
import { AdminNavPanelComponent } from './nav-panels/admin-nav-panel/admin-nav-panel.component';
import { EmployeeNavPanelComponent } from "./nav-panels/employee-nav-panel/employee-nav-panel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AdminNavPanelComponent, EmployeeNavPanelComponent]
})
export class AppComponent implements AfterViewInit,OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {
    initFlowbite();
    
  }

  loadComponent(component: any) {
    this.container.clear();
    this.container.createComponent(component);
  }

  clearComponent() {
    this.container.clear();
  }

  ngAfterViewInit(): void {
    this.loadComponent(LogInFormComponent);
    
  }

  loadAdminPanel():void{
    this.loadComponent(AdminNavPanelComponent);
  }


  title = 'optical-shop-front-end';
}
