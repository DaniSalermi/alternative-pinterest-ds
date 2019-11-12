import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { SearchService } from "src/app/service/search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-postdetail",
  templateUrl: "./postdetail.component.html",
  styleUrls: ["./postdetail.component.scss"]
})
export class PostdetailComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();
  photoInformation: any;

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit() {
    this.photoInformation = this.searchService.getPhotoSelected();
  }

  closeModal(event = null) {
    if ((event && event.srcElement.className === "modal") || !event) {
      this.router.navigateByUrl("/home");
    }
  }

  getModalImage(photoInformation) {
    return `url(${photoInformation.urls.small})`;
  }
}
