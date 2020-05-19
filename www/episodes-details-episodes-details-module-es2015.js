(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodes-details-episodes-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes-details/episodes-details.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes-details/episodes-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Similar to character details. view characters details for more references-->\n<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/episodes\"></ion-back-button>\n\t\t</ion-button>\n\t\t<ion-title class=\"ion-text-center\">{{ episode?.title }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card *ngIf=\"episode\">\n\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Series:</u></b> {{ episode.series }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Season:</u></b> {{ episode.season }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Episode:</u></b> {{ episode.episode }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Release date:</u></b> {{ episode.air_date }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Cast:</u></b> {{ episode.characters }} </p>\n\t\t</ion-card-content>\n\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EpisodesDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDetailsPageRoutingModule", function() { return EpisodesDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _episodes_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./episodes-details.page */ "./src/app/pages/episodes-details/episodes-details.page.ts");




const routes = [
    {
        path: '',
        component: _episodes_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodesDetailsPage"]
    }
];
let EpisodesDetailsPageRoutingModule = class EpisodesDetailsPageRoutingModule {
};
EpisodesDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EpisodesDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: EpisodesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDetailsPageModule", function() { return EpisodesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _episodes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./episodes-details-routing.module */ "./src/app/pages/episodes-details/episodes-details-routing.module.ts");
/* harmony import */ var _episodes_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./episodes-details.page */ "./src/app/pages/episodes-details/episodes-details.page.ts");







let EpisodesDetailsPageModule = class EpisodesDetailsPageModule {
};
EpisodesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _episodes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodesDetailsPageRoutingModule"]
        ],
        declarations: [_episodes_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodesDetailsPage"]]
    })
], EpisodesDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LTIwMTkxNTFDQTIvc3JjL2FwcC9wYWdlcy9lcGlzb2Rlcy1kZXRhaWxzL2VwaXNvZGVzLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lcGlzb2Rlcy1kZXRhaWxzL2VwaXNvZGVzLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGVzLWRldGFpbHMvZXBpc29kZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/episodes-details/episodes-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/episodes-details/episodes-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: EpisodesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesDetailsPage", function() { return EpisodesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/favourite.service */ "./src/app/services/favourite.service.ts");





let EpisodesDetailsPage = 
//Similar to character details. view characters details for more references
class EpisodesDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.episodeId = null;
        this.isFavourite = false;
    }
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
};
EpisodesDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteService"] }
];
EpisodesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-episodes-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./episodes-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodes-details/episodes-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./episodes-details.page.scss */ "./src/app/pages/episodes-details/episodes-details.page.scss")).default]
    })
    //Similar to character details. view characters details for more references
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteService"]])
], EpisodesDetailsPage);



/***/ }),

/***/ "./src/app/services/favourite.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favourite.service.ts ***!
  \***********************************************/
/*! exports provided: FavouriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteService", function() { return FavouriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



const STORAGE_KEY = 'favouriteEpisode';
let FavouriteService = class FavouriteService {
    constructor(storage) {
        this.storage = storage;
    }
    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }
    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }
    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            }
            else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }
    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
};
FavouriteService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
FavouriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], FavouriteService);



/***/ })

}]);
//# sourceMappingURL=episodes-details-episodes-details-module-es2015.js.map