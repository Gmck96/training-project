import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { ScanDocumentComponent } from './components/scan-document/scan-document.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FinalPageComponent } from './components/final-page/final-page.component';
import { PopUpWindowComponent } from './components/pop-up-window/pop-up-window.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    UploadDocumentComponent,
    ScanDocumentComponent,
    ConfirmationComponent,
    FinalPageComponent,
    PopUpWindowComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
