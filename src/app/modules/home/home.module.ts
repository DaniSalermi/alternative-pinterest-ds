import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { PhotosGridComponent } from "./photos-grid/photos-grid.component";
import { ReusableModule } from "../reusable/reusable.module";
import { PostdetailComponent } from "./postdetail2/postdetail.component";

@NgModule({
  declarations: [PhotosGridComponent, PostdetailComponent],
  imports: [CommonModule, HomeRoutingModule, ReusableModule]
})
export class HomeModule {}
