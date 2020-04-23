import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteService } from './../../services/favourite.service';

@Component({
    selector: 'app-episodes-details',
    templateUrl: './episodes-details.page.html',
    styleUrls: ['./episodes-details.page.scss'],
})
export class EpisodesDetailsPage implements OnInit {

    episode: any;
    episodeId = null;
    isFavourite = false;
   

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {

        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episode.episode_id));

        });


        this.favouriteService.isFavourite(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }

}
