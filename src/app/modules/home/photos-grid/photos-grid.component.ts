import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss']
})
export class PhotosGridComponent implements OnInit {
  search: string;
  photos: any[];
  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  showSearch(search: string) {
    this.search = search;
    this.searchService.getPhotos(search).subscribe((photos: any) => {
      console.log(photos);
      this.photos = photos.results;
    });
    // this.photos = this.searchService.getPhotos(search);
  }
}
