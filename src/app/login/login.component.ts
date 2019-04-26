import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ ]
})
export class LoginComponent implements OnInit {
flag = true;
  constructor( private route: Router) { }

  ngOnInit() {
  }
  loginmethod() {
    //this.flag = !this.flag;
   // alert('dknosdns');git
   
  }
}
