import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';

const MaterialComponents: any[] = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule
];

@NgModule({
  imports: 
  [MaterialComponents],
  exports: 
  [MaterialComponents]
})
export class MateriaDesignModule { }
