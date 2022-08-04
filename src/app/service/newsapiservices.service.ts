import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
  
   newsApiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d4da66eeb0245b1ad126eaa6f72aee6"
   
   topHeading():Observable<any>
{
  return this._http.get(this.newsApiURL);
}
}
