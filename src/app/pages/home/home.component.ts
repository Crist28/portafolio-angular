import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsappComponent } from '../../components/whatsapp/whatsapp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, FooterComponent, WhatsappComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  datos = {
    nombreCompleto : 'Cristian Jaimes',
    correo : 'cristianjaimes691@gmail.com',
    cargo : 'Desarrollador de software',
    experiencia : '1 año',
    contacto : '+57 3244497948',
    hv: 'Currículum'
  };

  nombreCompleto = 'Cristian Jaimes';
  correo = 'cristianjaimes691@gmail.com';
  cargo = 'Desarrollador web';
}
