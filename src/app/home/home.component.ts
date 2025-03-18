import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    { name: 'Compatibilidades Urbanísticas', description: 'Descripción de compatibilidad urbanística', image: 'assets/service1.jpg', link: '/servicios' },
    { name: 'Licencias de Actividad', description: 'Licencias para abrir tu negocio', image: 'assets/service2.jpg', link: '/servicios' },
    { name: 'Proyectos Eléctricos', description: 'Asesoría en proyectos eléctricos', image: 'assets/service3.jpg', link: '/servicios' }
  ];

  videoUrl = 'https://www.youtube.com/embed/YOUR_VIDEO_ID';

  contact() {
    // Navigate to contact page or show modal
  }
}
