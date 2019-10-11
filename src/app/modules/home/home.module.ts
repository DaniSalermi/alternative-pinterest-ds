import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PhotosGridComponent } from './photos-grid/photos-grid.component';

@NgModule({
  declarations: [PhotosGridComponent],
  imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
