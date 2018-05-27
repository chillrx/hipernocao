import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 */
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { ImcComponent } from './components/imc/imc.component';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';
import { PrescriptionComponent } from './components/prescription/prescription.component';
import { PreventionComponent } from './components/prevention/prevention.component';
import { NotificationComponent } from './components/notification/notification.component';

const routes: Routes = [{
  path: '', component: MainComponent, children: [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'imc',
    component: ImcComponent
  }, {
    path: 'exhibition',
    component: ExhibitionComponent
  }, {
    path: 'prescription',
    component: PrescriptionComponent
  }, {
    path: 'prevention',
    component: PreventionComponent
  }, {
    path: 'notification',
    component: NotificationComponent
  }, {
    path: '',
    component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MainRoutingModule { }
