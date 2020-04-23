import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const STORAGE_KEY = 'favouriteEpisode';

 
@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
 
  constructor(private storage: Storage) { }
 
  getAllFavouriteEpisodes() {
    return this.storage.get(STORAGE_KEY);
  }
 
  isFavourite(epiId) {
    return this.getAllFavouriteEpisodes().then(result => {
      return result && result.indexOf(epiId) !== -1;
    });
  }
 
  favouriteEpisode(epiId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        result.push(epiId);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [epiId]);
      }
    });
  }
 
  unfavouriteEpisode(epiId) {
    return this.getAllFavouriteEpisodes().then(result => {
      if (result) {
        var index = result.indexOf(epiId);
        result.splice(index, 1);
        return this.storage.set(STORAGE_KEY, result);
      }
    });
  }
 
  }
