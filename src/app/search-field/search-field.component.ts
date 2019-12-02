import { Component, OnInit } from '@angular/core';
import {GiphyService} from '../services/giphy/giphy.service';
import {GiphysQuery} from '../giphy/giphys.query';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {
    name = 'Search Field';
    term: any;
    results: any;
    constructor(private giphySvc: GiphyService, private giphysQuery: GiphysQuery) {
    }

    ngOnInit() {
        // setTimeout(() => {this.getQuery(); }, 20000);
    }

    search(term: string) {
        this.giphySvc.searchForGifs(term).subscribe(value => {
            this.results = value;
            console.log(this.results.data);
        });
    }


    getQuery() {
        const activeId = this.giphysQuery.getValue().entities;
        console.log('active id', activeId);
    }
}
