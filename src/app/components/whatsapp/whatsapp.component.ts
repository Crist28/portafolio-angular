import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css',
})
export class WhatsappComponent {
  redirigirAWhatsApp(): void {
    const numeroTelefono = '3244497948';
    const mensaje = `¡Hey! 🌟 ¿Listo para hablar sobre un proyecto o tienes alguna pregunta? Estoy aquí para ayudarte. ¡Envíame un mensaje y charlemos! 🚀 ¡Espero tu mensaje pronto!`;

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(urlWhatsApp, '_blank');
  }
}
