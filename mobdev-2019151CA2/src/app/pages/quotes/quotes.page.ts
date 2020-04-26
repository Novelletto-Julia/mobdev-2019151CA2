import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

//Similar to characters. view characters for references
@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    quotes: Observable<any>;
    quote: any; //variable created for the search method
    author: string = ''; //variable created for the search method, this variable will store the character's name typed by the user

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.quotes = this.api.getQuotes();
        this.quotes.subscribe(data => {
            console.log('my data', data);
        });
    }
    /*This page has in additional a search method 
     * It will call the method searchQoute to look for a match between the name typed by the user and the character author's name
     * it will look for it inside the array quotes
    */
    search() {
        this.quotes = this.api.searchQuote(this.author);
    }

    openDetails(quote) {
        let quoteId = quote.quote_id;
        this.router.navigateByUrl(`/tabs/quotes/${quoteId}`);
    }

}
