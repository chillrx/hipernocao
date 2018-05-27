import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {
  imcForm: FormGroup;
  resultIMC = {
    message: 'Inconclusivo',
    value: 0,
    view: false
  };
  constructor() { 
    this.imcForm = new FormGroup({
      weight: new FormControl(null, Validators.required),
      height: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
  }

  onImcFormSubmit = () => {
    this.resultIMC.value = this.imcForm.value.weight / (this.imcForm.value.height * this.imcForm.value.height);
    if (this.resultIMC.value != 0 && this.resultIMC.value < 16) {
      this.resultIMC.message = 'Magreza grave';
    } else if (this.resultIMC.value >= 16 && this.resultIMC.value < 17) {
      this.resultIMC.message = 'Magreza moderada';
    } else if (this.resultIMC.value >= 17 && this.resultIMC.value < 18.5) {
      this.resultIMC.message = 'Magreza leve';
    } else if (this.resultIMC.value >= 18.5 && this.resultIMC.value < 25) {
      this.resultIMC.message = 'Saudável';
    } else if (this.resultIMC.value >= 25 && this.resultIMC.value < 30) {
      this.resultIMC.message = 'Sobrepeso';
    } else if (this.resultIMC.value >= 30 && this.resultIMC.value < 35) {
      this.resultIMC.message = 'Obesidade Grau I';
    } else if (this.resultIMC.value >= 35 && this.resultIMC.value < 40) {
      this.resultIMC.message = 'Obesidade Grau II (Severa)';
    } else if (this.resultIMC.value >= 40) {
      this.resultIMC.message = 'Obesidade Grau III (Mórbida)';
    }else {
      this.resultIMC.message = 'Inconclusivo';
    }
    if (this.imcForm.value.weight != null && this.imcForm.value.height != null) return this.resultIMC.view = true;
    return this.resultIMC.view = false;
  }

}
