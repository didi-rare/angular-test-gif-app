import {HashMap, QueryEntity} from '@datorama/akita';
import {Giphy} from './giphy.model';
import {GiphysState, GiphysStore} from './giphys.store';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GiphysQuery extends QueryEntity<GiphysState, Giphy> {
    constructor(protected store: GiphysStore) {
        super(store);
    }

    getCurrentEntity(): HashMap<Giphy> {
        return this.store.getValue().entities;
    }
}
