import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TrimPipe } from './pipes/trim.pipe';



@NgModule({
  declarations: [CapitalizePipe, TrimPipe],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, CapitalizePipe, TrimPipe],
})
export class SharedModule { }
