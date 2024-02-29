import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Johan';

  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Selene';
    this.gender = 'female';
  }

  // i18Plural

  public clients: String[] = [
    'Johan',
    'Selene',
    'Luis',
    'Carlos',
    'Maria',
    'Ana',
    'Laura',
    'Fernanda',
    'Jorge',
    'Lina',
  ];

  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.shift();
  }
}
