import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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

  // KeyValue Pipe

  public person = {
    name: 'Johan',
    age: 35,
    address: 'Bogotá, Colombia',
  };

  public address = {
    street: 'Calle 123',
    city: 'Bogotá',
    country: 'Colombia',
  };

  public heroes = [
    {
      name: 'Superman',
      fly: true,
    },
    {
      name: 'Batman',
      fly: false,
    },
    {
      name: 'Aquaman',
      fly: false, // Aquaman can't fly
    },
  ];

  // Async Pipe

  public myObservableTimer = interval(2000);

  public promiseValue: Promise<String> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });

  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...
}
