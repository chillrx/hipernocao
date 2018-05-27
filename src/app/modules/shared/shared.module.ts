import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/**
 * Modules
 */
import { ComponentModule } from './component.module';
import { MaterialModule } from './material.module';
import { TextMaskModule } from 'angular2-text-mask';

/**
 * Services
 */
import { MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ComponentModule,
    MaterialModule,
    ReactiveFormsModule,
    TextMaskModule
  ], exports: [
    ComponentModule,
    MaterialModule,
    ReactiveFormsModule,
    TextMaskModule
  ], declarations: [
  ], providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
  ], entryComponents: [
  ]
})
export class SharedModule { }
