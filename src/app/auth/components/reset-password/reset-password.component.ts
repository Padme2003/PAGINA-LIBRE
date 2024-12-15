import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [MessageService]
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: this.passwordsMatch });

  private token: string = '';

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    // Obtener el token de los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (!this.token) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Token inválido o no proporcionado.' });
        this.router.navigate(['/auth/login']);
      }
    });
  }

  passwordsMatch(control: AbstractControl): null | object {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (newPassword !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      const { newPassword } = this.resetPasswordForm.value;
      const data = {
        newPassword,
        token: this.token
      };
      this.authService.resetPassword(data).subscribe(
        (res) => {
          console.log('Respuesta del servidor:', res);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
          // Redirigir al usuario al login
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          console.error('Error del servidor:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message || 'An error occurred' });
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Formulario inválido', detail: 'Por favor, complete todos los campos correctamente.' });
    }
  }
}
