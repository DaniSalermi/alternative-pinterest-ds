import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private unsplashUrl = 'https://api.unsplash.com';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization:
        'Client-ID 8a5b154bdb119e7f17a3ebf1452f7589dbc59ab5572bc169abbfe3615cf1c9b4'
    })
  };

  constructor(private httpClient: HttpClient) {}

  /** GET photos from the server */
  getPhotos() {
    return this.httpClient.get(`${this.unsplashUrl}/photos`, this.httpOptions);
  }
}
