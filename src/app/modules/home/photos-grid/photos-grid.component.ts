import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss']
})
export class PhotosGridComponent implements OnInit {
  search: string;
  constructor() {}

  ngOnInit() {}

  showSearch(search: string) {
    this.search = search;
  }
}
