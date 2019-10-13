import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  photos;
  @Output() newSearchEvent = new EventEmitter<string>();
  search = new FormGroup({ searchTerm: new FormControl('') });

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.search.controls['searchTerm'].valueChanges
      .pipe(
        debounceTime(500),
        filter(term => term),
        distinctUntilChanged()
      )
      .subscribe(result => {
        this.newSearch(result);
      });
  }

  newSearch(term: string) {
    this.newSearchEvent.emit(term);
  }
}
