import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Giphy} from './giphy.model';
import {Injectable} from '@angular/core';


export interface GiphysState extends EntityState<Giphy> {}


@Injectable({
    providedIn: 'root'
})
@StoreConfig({
    name: 'giphys'
})
export class GiphysStore extends EntityStore<GiphysState, Giphy> {
    constructor() {
        super();
    }
}
