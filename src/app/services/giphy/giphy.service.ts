import { Injectable } from '@angular/core';
import {GiphysStore} from '../../giphy/giphys.store';
import {GiphysQuery} from '../../giphy/giphys.query';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

    private searchUrl = 'https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc';

    constructor(private giphysStore: GiphysStore,
                private giphysQuery: GiphysQuery,
                private http: HttpClient) {

    }


    /**
     *
     * Method to make http call to Gify API
     * @param searchTerm the search input.
     */
    searchForGifs(searchTerm: string): Observable<any> {
        const url = this.searchUrl + '&q=' + searchTerm;
        return this.http.get(url).pipe(
            tap((response: any) => this.giphysStore.set({entities: {searchTerm, results: response.data}}))
        );
    }
}

