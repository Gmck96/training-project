import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {UploadDocumentComponent} from "./components/upload-document/upload-document.component";
import {ConfirmationComponent} from "./components/confirmation/confirmation.component";
import {FinalPageComponent} from "./components/final-page/final-page.component";
import {ScanDocumentComponent} from "./components/scan-document/scan-document.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path:'welcome', component:WelcomePageComponent},
  {path: 'upload', component:UploadDocumentComponent},
  {path: 'scan',component:ScanDocumentComponent},
  {path: 'confirmation', component:ConfirmationComponent},
  {path: 'final', component:FinalPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
