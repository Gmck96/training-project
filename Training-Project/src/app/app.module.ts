import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { ScanDocumentComponent } from './components/scan-document/scan-document.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { FinalPageComponent } from './components/final-page/final-page.component';
import { PopUpWindowComponent } from './components/pop-up-window/pop-up-window.component';
import { WebcamModule} from "ngx-webcam";
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { QRCodeModule } from 'angularx-qrcode'; //This is for QR code


@NgModule({
  declarations: [
    AppComponent,
    UploadDocumentComponent,
    ScanDocumentComponent,
    ConfirmationComponent,
    FinalPageComponent,
    PopUpWindowComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
