import { NgModule, ModuleWithProviders  } from '@angular/core';
import { MdListModule, MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule,
    MdButtonToggleModule, MdCardModule, MdChipsModule, MdGridListModule,
    MdIconRegistry
  } from '@angular/material';
import 'hammerjs';

const MaterialModules = [MdListModule, MdSidenavModule, MdToolbarModule, MdButtonModule,
        MdButtonToggleModule, MdCardModule, MdChipsModule, MdGridListModule, MdIconModule];

@NgModule({
    imports: [...MaterialModules],
    exports: [...MaterialModules],
    providers: [ MdIconRegistry ]
})
export class CardMaterialModule { }
