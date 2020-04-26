import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//To build the logic of favorite system I used the classes and presentations provided by Mikhail Timofeev
//I create one favorite page for each details page. All the logic is the same for all pages
/* First of all a storage was created in the ionic
* and a variable to store the value that must be add in the storage (STORAGE_KEY)
*/
const STORAGE_KEY = 'favouriteCharacter';

@Injectable({
    providedIn: 'root'
})
export class FavouriteCharService {
    //The storage will be called in the constructor 
    constructor(private storage: Storage) { }
    //This method makes possible to get all save as favorite. This is important to check if a character is favorite already, if this is the case, on click it must 
    //turn not favorite anymore, the reverse is also true
    getAllFavouriteCharacters() {
        return this.storage.get(STORAGE_KEY);
    }
    //This method will check is the character is already favorite. As explained above, it will use the method get all the favorite for that
    isFavourite(charId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(charId) !== -1;
        });
    }
    //This method will will the character in faorite, it is possible when the character is not yet favorite
    favouriteCharacter(charId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(charId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [charId]);
            }
        });
    }
    //This method will make a favorite character became not favorite anymore. Its only possible if the character is already favorite
    unfavouriteCharacter(charId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(charId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
}
