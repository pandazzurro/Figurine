import { NgModule, ModuleWithProviders  } from '@angular/core';
import { MdListModule, MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule, MdExpansionModule,
    MdButtonToggleModule, MdCardModule, MdChipsModule, MdGridListModule, MdTooltipModule,
    MdIconRegistry
  } from '@angular/material';
import 'hammerjs';

const MaterialModules = [MdListModule, MdSidenavModule, MdToolbarModule, MdButtonModule, MdIconModule, MdExpansionModule,
        MdButtonToggleModule, MdCardModule, MdChipsModule, MdGridListModule, MdIconModule, MdTooltipModule];

@NgModule({
    imports: [...MaterialModules],
    exports: [...MaterialModules],
    providers: [ MdIconRegistry ]
})
export class CardMaterialModule { }
