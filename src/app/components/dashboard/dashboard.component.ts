import { 
  Component, 
  OnInit,
  ComponentFactory, 
  ComponentRef, 
  ComponentFactoryResolver, 
  ViewContainerRef,
  ViewChild } from '@angular/core';

import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('alertContainer', { read: ViewContainerRef, static: true }) container;
  
  componentRef: ComponentRef<any>;
 
  constructor(private resolver: ComponentFactoryResolver) {}
  
  createComponent(type) {

    this.container.clear();

    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    
    this.componentRef.instance.type = type;

    this.componentRef.instance.output.subscribe(event => console.log(event));

  }
  
  ngOnDestroy() {
    this.componentRef.destroy();    
  }

  userData = {
    username: 'Amine',
    salary: '2000',
    rate: '4.8920',
    date: Date.now(),
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur illum temporibus asperiores vero autem vel repellendus debitis, mollitia unde ab consequuntur suscipit officiis velit iusto laudantium, cupiditate, aspernatur labore consectetur!'
  }

  ngOnInit() {

  }

}
