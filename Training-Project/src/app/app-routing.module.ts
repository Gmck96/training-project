import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UploadDocumentComponent} from "./components/upload-document/upload-document.component";

const routes: Routes = [
  {path:'upload',component:UploadDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
