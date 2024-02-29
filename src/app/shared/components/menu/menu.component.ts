import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-fw pi-download',
        items: [
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: '/numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon',
          },
        ],
      },
    ];
  }
}
