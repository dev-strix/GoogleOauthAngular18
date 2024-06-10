declare var google: any;
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: "1059162288936-r2jh4q1fh1eqv1bem4qsf3jpg4702634.apps.googleusercontent.com",
      /*callback: (response: any) => {  Codigo que funciona para el consolelog y tiene las credenciales JWT
        console.log("callback", response)
      }*/
      callback: (resp: any) => this.handleLogin(resp)
    });

    //estas son propiedades de la creacion del boton de google login
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: "filled_black",
      size: "large",
      shape: "rectangle",
      with: 350
    })
    
  }
  private decodeToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }
  handleLogin( response: any){
    if (response) {
      //decodificar Token
      const payload = this.decodeToken(response.credential);
      console.log(payload);//DATOS DEL USUARIO decodificados
      //store is session
      sessionStorage.setItem('LoggedInUser', JSON.stringify(payload));
      //redireccionar al home/browser--MANEJO DE RUTAS
      this.router.navigate(['browse']);
    }
  }
}
