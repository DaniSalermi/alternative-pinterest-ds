import { Component, OnInit, HostListener } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss']
})
export class PhotosGridComponent implements OnInit {
  search: string;
  photos: any[];
  innerWidth: any;
  modalIsOpen: boolean;
  photoSelected: any;
  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.showSearch('hola');
    this.onResize();
  }

  // Detect window size
  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  showSearch(search: string) {
    this.search = search;
    // this.searchService.getPhotos(search).subscribe((photos: any) => {
    //   console.log(photos);
    //   this.photos = photos.results;
    // });
    this.photos = this.searchService.getPhotos(search);
    console.log(this.photos);
  }

  // Función para calcular el número de columnas dentro de la pantalla según el tamaño de las misnma
  numberOfColumns() {
    return Math.floor(this.innerWidth / 300);
  }

  // Open modal function
  openModal(photo) {
    this.photoSelected = photo;
    this.modalIsOpen = true;
  }

  // Close modal function
  closeModal() {
    this.modalIsOpen = false;
  }
}
