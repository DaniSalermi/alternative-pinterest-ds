import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PhotosGridComponent } from "./photos-grid/photos-grid.component";
import { PostdetailComponent } from "./postdetail2/postdetail.component";

const routes: Routes = [
  {
    path: "home",
    component: PhotosGridComponent
  },
  {
    path: "pin/:id",
    component: PostdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
