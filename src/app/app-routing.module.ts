import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Components
 */
import { LoginComponent } from './components/login/login.component';

/**
 * Modules
 */

const routes: Routes = [{
  path: '',
  redirectTo: '/main/dashboard',
  pathMatch: 'full'
},{
  path: 'main',
  loadChildren: './modules/main/main.module#MainModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
