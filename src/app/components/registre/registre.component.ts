import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.scss']
})
export class RegistreComponent implements OnInit {

  // I did not apply any validation for the registre component
  user = {
    name: '',
    username: '',
    password: '',
    image: '',
  }
  loading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onRegistre() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      console.log(this.user)
    }, 2000)
  }

}