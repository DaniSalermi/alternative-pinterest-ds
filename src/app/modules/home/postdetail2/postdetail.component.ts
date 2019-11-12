import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();
  @Input() photoInformation: any;

  constructor() {}

  ngOnInit() {}

  closeModal(event = null) {
    if ((event && event.srcElement.className === 'modal') || !event) {
      this.closeModalEvent.emit();
    }
  }

  getModalImage(photoInformation) {
    return `url(${photoInformation.urls.small})`;
  }
}
