import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomserviceService {   

  constructor(private http: HttpClient) { }

  getPhotos() {
    const req = new HttpRequest("GET", "https://jsonplaceholder.typicode.com/photos", {
      reportProgress: true
    });
    return this.http.request(req)
  }
}
