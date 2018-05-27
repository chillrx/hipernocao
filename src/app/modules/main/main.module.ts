import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * MOdules
 */
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';

/**
 * Components
 */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { ImcComponent } from './components/imc/imc.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';
import { PreventionComponent } from './components/prevention/prevention.component';
import { NotificationComponent } from './components/notification/notification.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    MainComponent, ImcComponent, PrescriptionComponent, ExhibitionComponent, PreventionComponent, NotificationComponent
  ]
})
export class MainModule { }
