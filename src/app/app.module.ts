import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { PreloaderComponent } from './_directives/preloader/preloader.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertService } from './_services/alert.service';
import { FirebaseService } from './_services/firebase.service';
import { GoogleComponent } from './google/google.component';
import { SheetsService } from './_services/sheets.service';
import { CaptacaoComponent } from './captacao/captacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentoComponent,
    AlertComponent,
    PreloaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GoogleComponent,
    CaptacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    FirebaseService,
    AuthGuard,
    SheetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
