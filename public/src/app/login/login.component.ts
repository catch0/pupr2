import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { RegisterComponent } from './register/register.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {};
  loginErrors=[];
  selectedOption: string;
  active_register:boolean = false;

  constructor(public dialog: MdDialog) { }

  openDialog() {
    if(!this.active_register){
      let dialogRef = this.dialog.open(RegisterComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.selectedOption = result;
      });
      this.active_register = true;
    }
    console.log("help me");
  }


  ngOnInit() {
  }

}
