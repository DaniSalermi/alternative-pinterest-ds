import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosGridComponent } from './photos-grid/photos-grid.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
