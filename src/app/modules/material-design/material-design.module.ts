import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents: any[] = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule  
];

@NgModule({
  imports: 
  [MaterialComponents],
  exports: 
  [MaterialComponents]
})
export class MateriaDesignModule { }
