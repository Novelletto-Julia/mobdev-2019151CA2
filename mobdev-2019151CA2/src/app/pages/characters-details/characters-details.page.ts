import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteCharService } from './../../services/favourite-char.service';

@Component({
    selector: 'app-characters-details',
    templateUrl: './characters-details.page.html',
    styleUrls: ['./characters-details.page.scss'],
})
export class CharactersDetailsPage implements OnInit {
    
    //Inicialization of the variables used in the methods
    character: any; //character that will be selected
    characterId = null; //id of selected character
    isFavourite = false; //this character is selected as a favorite or not
    //is important this variable start as false, othewise all characters start as favorite


    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteCharService: FavouriteCharService) { }

    ngOnInit() {
        /*This is the main block 
         *In here the information of the character id selecte in the page characters will be passed
         */
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(this.characterId).subscribe(res => { //having this id the getCharacter method is called
            this.character = res[0];

            console.log(JSON.stringify(this.character.char_id));// and this character chooosen must be displayed in the screen
            //In the characterDetails.html will be request all the information from the character thar should be displayed
        });

        //Also in the main method the favorit service is called.
        this.favouriteCharService.isFavourite(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    //This methods works in the case the user select the character as favorite
    favouriteCharacter() {
        this.favouriteCharService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }
    //This method works in case the user select the chacter as not favorit
    unfavouriteCharacter() {
        this.favouriteCharService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    //This two methods work togheter, this create the opition to select as favorite and then if change you mind change for not favorite
    }
}

