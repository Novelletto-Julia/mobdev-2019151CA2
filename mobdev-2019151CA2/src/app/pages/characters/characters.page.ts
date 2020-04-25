import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

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
    

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
   
 this.loadCharacters();
    }

    loadCharacters(event?) {

        
        this.api.getCharacters(this.page).subscribe(data => {

            console.log('my data: ', data);

          
            this.characters = this.characters.concat(data);

           
            if (event) {
                event.target.complete();
            }
        })
    }

    loadMore(event?) {
      
        this.page = this.page + 20;
      
        this.loadCharacters(event);

       
        if (this.page > this.page) {
            event.target.disabled = true;
        }
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

}
