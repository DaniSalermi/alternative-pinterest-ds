import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [HeaderComponent, ModalComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [HeaderComponent, ModalComponent]
})
export class ReusableModule {}
