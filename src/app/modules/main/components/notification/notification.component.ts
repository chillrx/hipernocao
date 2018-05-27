import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  prescriptionForm: FormGroup;
  list = [];
  mask = {
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    hour: [/\d/, /\d/, ':', /\d/, /\d/],
    zip: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,],
    cell_phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  };

  constructor(snackbar: MatSnackBar) {
    this.prescriptionForm = new FormGroup({
      medicine: new FormControl(null),
      quantity: new FormControl(null),
      description: new FormControl(null),
      date: new FormControl(null),
      hour: new FormControl(null),
      list: new FormControl([])
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:curly
    if (localStorage.list) this.list = JSON.parse(localStorage.list);
  }
  addPrescription = () => {
    this.list.push({
      medicine: this.prescriptionForm.value.medicine,
      quantity: this.prescriptionForm.value.quantity,
      description: this.prescriptionForm.value.description,
      date: this.prescriptionForm.value.date,
      hour: this.prescriptionForm.value.hour
    });
    localStorage.setItem('list', JSON.stringify(this.list));
    this.prescriptionForm.reset();
    let snackBarRef = snackbar.open('Cadastrado com sucesso!', '', {
      duration: 1000,
    });
  }

  removePrescription = (index) => {
    this.list.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}
