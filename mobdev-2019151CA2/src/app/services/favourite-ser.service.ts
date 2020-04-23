import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteQuote';

@Injectable({
    providedIn: 'root'
})
//Despite of the wronge name, this favorite service will be use for quotes
export class FavouriteSerService {

    constructor(private storage: Storage) { }

    getAllFavouriteQuotes() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavourite(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            return result && result.indexOf(quoteId) !== -1;
        });
    }

    favouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                result.push(quoteId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [quoteId]);
            }
        });
    }

    unfavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                var index = result.indexOf(quoteId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
}
