import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FavouriteSerService } from './../../services/favourite-ser.service';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.page.html',
  styleUrls: ['./quotes-details.page.scss'],
})
//Similar to character details. view characters details for more references
export class QuotesDetailsPage implements OnInit {

    quote: any;
    quoteId = null;
    isFavourite = false;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteSerService) { }

 ngOnInit() {

        this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(this.quoteId).subscribe(res => {
            this.quote = res[0];
            console.log(JSON.stringify(res[0]));
        });
        
        this.favouriteService.isFavourite(this.quoteId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteQuote() {
        this.favouriteService.favouriteQuote(this.quoteId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteQuote() {
        this.favouriteService.unfavouriteQuote(this.quoteId).then(() => {
            this.isFavourite = false;
        });
    }
  }


