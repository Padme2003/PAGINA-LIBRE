import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LayoutService } from '../../../admin/layout/service/app.layout.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [MessageService]
})
export class ForgotPasswordComponent {

  forgotPasswordForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      const formData = this.forgotPasswordForm.value;
      this.authService.forgotPassword(formData).subscribe(
        (res) => {
          console.log('Respuesta del servidor:', res);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: res.message });
          // Puedes redirigir al usuario si es necesario
          // this.router.navigate(['/auth/login']);
        },
        (error) => {
          console.error('Error del servidor:', error);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message || 'An error occurred' });
        }
      );
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Formulario inválido', detail: 'Por favor, complete todos los campos' });
    }
  }
}
