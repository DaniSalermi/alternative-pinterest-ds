import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  photos;
  constructor(private searchService: SearchService) {}

  ngOnInit() {}
}
