import { Component, Input } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotificacionesComponent } from '../notificaciones/notificaciones.component';
import { MetricasComponent } from '../metricas/metricas.component';
import { ConfiguracionComponent } from '../configuracion/configuracion.component';
import { GuiaUsoComponent } from '../guia-uso/guia-uso.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    DashboardComponent,
    NotificacionesComponent,
    MetricasComponent,
    ConfiguracionComponent,
    GuiaUsoComponent,
    CommonModule
  ],
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss'],
})
export class PageComponent {
  @Input() title: string = '';
}
