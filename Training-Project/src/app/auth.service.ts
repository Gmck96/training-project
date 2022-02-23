import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  allowedToProceed(){
    //Verify that the user has permission to continue in here
    return true;
  }
}
