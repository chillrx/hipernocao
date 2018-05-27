import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public disabled: boolean;

  public loginForm: FormGroup;

  constructor(
    private _router: Router,
    public _snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.disabled = false;

    this.loginForm = new FormGroup({
      user: new FormControl(null),
      password: new FormControl(null)
    });
  }
}
