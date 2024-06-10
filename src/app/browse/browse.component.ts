import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  auth = inject(AuthService);

  //Obtener datos del usuario logueado y colocarlos en el navegador
  name = JSON.parse(sessionStorage.getItem('LoggedInUser')!).name;
  userProfileImg = JSON.parse(sessionStorage.getItem('LoggedInUser')!).picture;
  email = JSON.parse(sessionStorage.getItem('LoggedInUser')!).email;
  emailVerified = JSON.parse(sessionStorage.getItem('LoggedInUser')!).email_verified;

  //Funcion para cerrar sesion
  singOut() {
    console.log("Sesion Cerrada");
    this.auth.singOut();
    sessionStorage.removeItem('LoggedInUser');
    //localStorage.clear();
    //sessionStorage.clear();
    //this.router.navigate(['/']);
    //window.location.reload();
  } 
}
