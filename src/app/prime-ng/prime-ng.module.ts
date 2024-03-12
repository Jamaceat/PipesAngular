import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { InputSwitchModule } from 'primeng/inputswitch';
@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    ButtonModule,
    FieldsetModule,
    PanelModule,
    InputSwitchModule,
  ],
})
export class PrimeNgModule {}
