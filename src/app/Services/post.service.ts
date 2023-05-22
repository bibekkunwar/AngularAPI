import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://192.168.0.48:8000/api/task'
  constructor(private httpClient :HttpClient) { }
   /**
    * This function retrieves posts from a specified URL using the HTTP client.
    * @returns The `getPosts()` function is returning an HTTP GET request to the URL specified in the
    * `url` variable using the `httpClient` service. The response from the server will be returned as
    * an observable.
    */
    getTasks(){
      return this.httpClient.get(this.url);
    }


}
