import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();
  @Input() photoInformation: any;

  constructor() {}

  ngOnInit() {
    console.log(this.photoInformation);
  }

  closeModal(event = null) {
    if ((event && event.srcElement.className === 'modal') || !event) {
      this.closeModalEvent.emit();
    }
  }
}
