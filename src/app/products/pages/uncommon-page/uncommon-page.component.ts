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
}
