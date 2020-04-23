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

    character: any;
    characterId = null;
    isFavourite = false;


    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteCharService: FavouriteCharService) { }

    ngOnInit() {

        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];

            console.log(JSON.stringify(this.character.char_id));
        });

        this.favouriteCharService.isFavourite(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteCharacter() {
        this.favouriteCharService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteCharacter() {
        this.favouriteCharService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });

    }
}

