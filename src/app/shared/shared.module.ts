// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { SmartShadowsDirective } from './directives/smart-shadows.directive';

// Components
import { DropdownComponent } from './components/dropdown/dropdown.component';

const EXPORTED_COMPONENTS = [
  DropdownComponent
];

const EXPORTED_DIRECTIVES = [
  SmartShadowsDirective
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    ...EXPORTED_DIRECTIVES,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...EXPORTED_COMPONENTS,
    ...EXPORTED_DIRECTIVES
  ]
})
export class SharedModule {
}
