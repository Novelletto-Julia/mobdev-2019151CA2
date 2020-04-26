import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
/*All the data for this app was retrived using the Breaking bad api (ref: https://breakingbadapi.com/) 
*for structure this app, pages and some of the logic, I used the classes and presentations provided by Mikhail Timofeev
*/
//In the component all pages related to the characters are linked. 
@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    //Creation of an array to organize the characters taken from API
    characters = [];
    //In total, as described in the breaking bad API documentation, there are 63 character
    charactersTotal: 63;
    //Starting page
    page = 0;
    //This variables are important to implement the infinit scroll method, To create the logic I based on the video of Simon Grimm (ref: https://www.youtube.com/watch?v=NBeExE9dvR0)

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

        this.loadCharacters(); //In the main method the loadCharactes method is called
    }
    //The paramenter event is linked in the html code. that will result in the activation of this method
    loadCharacters(event?) {


        this.api.getCharacters(this.page).subscribe(data => {

            console.log('my data: ', data);
            //This method will separate the whole array in many pages. This pages contain the quantity of characters selected in the load more method

            this.characters = this.characters.concat(data);


            if (event) {
                event.target.complete();//This method will load only the amount of the characters selected. 
            }
        })
    }
    //After load 20 character the page stops, it will not load more until this function is called
    //when this function will be called is told by the 'threshold="5%"' code in the html file
    loadMore(event?) {

        this.page = this.page + 20;

        this.loadCharacters(event);


        if (this.page > this.page) {
            event.target.disabled = true;
        }
    }

    //OpenDetails allows me to select one character of the list and them generate a new page (characterDetails) that will contain all the details of the character
    openDetails(character) {
        let characterId = character.char_id; //the character selected is passed to the api where the char_id is look into it
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

}
