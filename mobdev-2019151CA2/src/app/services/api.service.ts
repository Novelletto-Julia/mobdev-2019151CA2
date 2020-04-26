import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
//Array inicialization
quotes: Array<any>;

    constructor(private http: HttpClient) { }
    //Get character is a function to load all characters avaible in the api
    //The limit=20&offset=${page} is my maximum load characters limit per 'page', once I scroll down another 20 character is load and so on, required by the infinite scroll feature 
    getCharacters(page) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${page}`);
    }
    //Get Character is a methode to get and displey one specific character, for that is used an id that is individual for each character
    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }
    //Similar process of character, without infinite scroll
    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }
    //The logic of search quotes is more elaborated. This code was written based on fernandocjrr's code in his github account (ref: https://github.com/fernandocjrr/mobdev-ca2/commit/0021ae166270b4c744d2d978586c5d6d55f3a688)
    //and the video from Simon Grimm about search and infinity scroll (ref: https://www.youtube.com/watch?v=Nc1RqvDY-B8&feature=youtu.be)
   getQuotes() {
       //First of all an array is created using the api quotes, this makes possible a search
        this.http.get(('https://breakingbadapi.com/api/quotes')).subscribe(data => {
             this.quotes = data as Array<any>; //quotes stored in the array
         });
        //return all quotes avaible, this is what is seen when the tab quotes is opened
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
    }
    //A method search is created where a parameter author is required. Author is the name (string) of the charactrer that must be write in the search field 
    searchQuote(author: string) {
         let authorQuotes: any[] = [];//authorQuotes will be an array that contains the quotes that have as author the name written in the search
         for (let quote of this.quotes) {//for each quote in the array quotes

               if (quote.author.toLowerCase().includes(author.toLowerCase())) { //if the variable author matches with the name written
                 authorQuotes.push(quote);//add in the array
             }
         }
          return of(authorQuotes);//return this array, this will display only the quotes from that specific author
     }
     /* I am aware that the functionality is not the best. In the first time the name is written the result is show at once.
     * However, if another name is written it does't change the array until you click the cancel button. Once the small x on the right side is clicked
     * the name in the search bar is erased but the quotes shown is from the last caracter you named. Also, is impossible to retrive the quotes array for now
     * I believe I could search and impove this with more time of research about search in ionic. But for this CA I was't able to fix it
     */


    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        return this.http.get('https://www.breakingbadapi.com/api/death-count');
    }
    //In the case of death a simpler search is made, the search is made by using the name of the character responsable for the deaths
    //So this method has as parameter the name of the character
    getDeath(charName) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${charName}`);
    }

}