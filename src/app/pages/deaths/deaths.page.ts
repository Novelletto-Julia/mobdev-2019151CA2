import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
//Similar to characters. view characters for references
@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    deaths: Observable<any>;
    death: any;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('my data: ', data);
        });
    }
    /*This page has a search method
    *This method will return the number of deaths caused by a certain character
    *The logic was created base on the post of wlangiewicz user (ref: https://forum.ionicframework.com/t/ionic-ion-searchbar-searching-only-when-enter-is-pressed/42003)
    *and the other functions I am using in the app
    */
    search() {
        this.deaths = this.api.getDeath(this.death);
        this.deaths.subscribe(res => {
            console.log('my data', res);
        });
    }
}
