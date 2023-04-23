import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }


  Fake_api(){
   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  servicecall(){
    alert("servicecalling!");
  }
}
