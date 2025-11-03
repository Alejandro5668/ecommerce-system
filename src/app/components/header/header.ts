import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [MenubarModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'Anillos',
        routerLink: '/anillos'
      },
      {
        label: 'Cadenas',
        routerLink: '/cadenas'
      },
      {
        label: 'Dijes',
        routerLink: '/dijes'
      },
      {
        label: 'Pulseras',
        routerLink: '/pulseras'
      },
      {
        label: 'Sobre Nosotros',
        icon: 'pi pi-shop',
        items: [
          {
            label: 'Conocenos',
            routerLink: '/nosotros'
          },
          {
            label: 'Contacto',
            routerLink: '/contacto'
          },
        ]
      }
    ];
  }
}
