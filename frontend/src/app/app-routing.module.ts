import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { TfaComponent } from './auth/tfa/tfa.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',pathMatch:'full'
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'registre',
    component: RegistreComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '2fa',
    component: TfaComponent,
  },
  
  { path: '**', redirectTo: 'registre', pathMatch: 'full' },
 
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
