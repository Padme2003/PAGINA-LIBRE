import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    mail: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", Validators.required),
    rememberMe: new FormControl(false)
  });

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {}

  // Verifica si ya hay una sesión activa
  ngOnInit() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      this.router.navigate(['/admin']);
    }
  }

  funIngresar() {
    if (this.loginForm.valid) {
      const { mail, password, rememberMe } = this.loginForm.value;

      this.authService.loginConNest({ mail, password }).subscribe(
        (res) => {
          if (rememberMe) {
            localStorage.setItem('token', res.token);
          } else {
            sessionStorage.setItem('token', res.token);
          }

          this.messageService.add({
            severity: 'success',
            summary: 'Login exitoso',
            detail: 'Has iniciado sesión correctamente'
          });
          this.router.navigate(['/admin']);
        },
        (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Credenciales incorrectas'
          });
        }
      );
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Formulario inválido',
        detail: 'Por favor, complete todos los campos'
      });
    }
  }
}
