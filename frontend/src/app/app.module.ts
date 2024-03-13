import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NbTooltipModule, NbInputModule, NbOptionModule, NbSelectModule } from '@nebular/theme';
import {
  NbCardModule,
  NbDatepickerModule,
  NbLayoutModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbButtonModule,
} from '@nebular/theme';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {LoginComponent} from './auth/login/login.component';
import {authInterceptorProviders} from './auth/auth-interceptor';
import { RegistreComponent } from './auth/registre/registre.component';
import { TfaComponent } from './auth/tfa/tfa.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegistreComponent, TfaComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbOptionModule,
    NbSelectModule,
  ],
  providers:[authInterceptorProviders],
  bootstrap: [AppComponent],

})
export class AppModule {
}
