import {Component, OnDestroy, OnInit} from '@angular/core';
import {GiphyService} from '../services/giphy/giphy.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-search-field',
    // selector: 'app-root',
    templateUrl: './search-field.component.html',
    styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
    name = 'Search Field';
    term = '';
    results: any;
    state = '';
    subscription: Subscription;
    constructor(private giphySvc: GiphyService) {
    }

    ngOnInit() {
    }

    search(term: string) {
        this.state = 'loading';
        this.subscription = this.giphySvc.searchForGifs(term).subscribe(value => {
            this.state = '';
            this.results = value;
        }, error1 => {
            this.state = 'error';
        });
    }


    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
