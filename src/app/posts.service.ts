import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {AppSettings} from './app.settings';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
    return this.http.get(AppSettings.API_url + '/test').map(res => res.json());
  }

}
