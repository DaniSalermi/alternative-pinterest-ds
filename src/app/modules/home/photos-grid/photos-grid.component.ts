import { Component, OnInit, HostListener } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-photos-grid',
  templateUrl: './photos-grid.component.html',
  styleUrls: ['./photos-grid.component.scss']
})
export class PhotosGridComponent implements OnInit {
  search: string;
  photos: any[] = [];
  innerWidth: any;
  page = 1;
  isLoading: boolean;
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

  @HostListener('window:scroll')
  onWindowScroll() {
    if (
      window.scrollY + window.innerHeight > document.body.clientHeight + 15 &&
      !this.isLoading
    ) {
      this.page++;
      this.isLoading = true;
      console.log('Carga la pagina', this.page);
      this.showSearch(this.search, this.page);
    }
  }

  showSearch(search: string, page = 1) {
    this.search = search;
    if (page === 1) {
      this.photos = [];
    }

    // this.searchService.getPhotos(search, page).subscribe((photos: any) => {
    //   console.log(photos);
    //   this.photos = [...this.photos, ...photos.results];
    //   this.isLoading = false;
    // });
    this.photos = [...this.photos, ...this.searchService.getPhotos(search)];
    this.isLoading = false;
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
