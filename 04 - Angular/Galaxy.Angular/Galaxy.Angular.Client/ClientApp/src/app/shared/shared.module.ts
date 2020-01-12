import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [CapitalizePipe, TrimPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CapitalizePipe,
    TrimPipe
  ],
})
export class SharedModule { }
