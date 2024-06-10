declare var google: any;
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);

  constructor() { }

  singOut() {
    google.accounts.id.disableAutoSelect();
    //una vez cerrada la sesion se redirecciona a la ruta principal
    this.router.navigate(['/']);
  }
}
