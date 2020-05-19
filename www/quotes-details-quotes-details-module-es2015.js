(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotes-details-quotes-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes-details/quotes-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes-details/quotes-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Similar to character details. view characters details for more references-->\n<ion-header>\n\t<ion-toolbar>\n\t\t<ion-button slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/quotes\"></ion-back-button>\n\t\t</ion-button>\n\t\t<ion-title class=\"ion-text-center\">{{ quote?.quote }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"unfavouriteQuote()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteQuote()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card *ngIf=\"quote\">\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Quote:</u></b> </p>\n\t\t\t<blockquote> {{ quote.quote }} </blockquote>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p><b><u>Series:</u></b> {{ quote.series }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p><b><u>Author:</u></b> {{ quote.author }} </p>\n\t\t</ion-card-content>\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: QuotesDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsPageRoutingModule", function() { return QuotesDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotes_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotes-details.page */ "./src/app/pages/quotes-details/quotes-details.page.ts");




const routes = [
    {
        path: '',
        component: _quotes_details_page__WEBPACK_IMPORTED_MODULE_3__["QuotesDetailsPage"]
    }
];
let QuotesDetailsPageRoutingModule = class QuotesDetailsPageRoutingModule {
};
QuotesDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotesDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details.module.ts ***!
  \***************************************************************/
/*! exports provided: QuotesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsPageModule", function() { return QuotesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotes-details-routing.module */ "./src/app/pages/quotes-details/quotes-details-routing.module.ts");
/* harmony import */ var _quotes_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes-details.page */ "./src/app/pages/quotes-details/quotes-details.page.ts");







let QuotesDetailsPageModule = class QuotesDetailsPageModule {
};
QuotesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotes_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotesDetailsPageRoutingModule"]
        ],
        declarations: [_quotes_details_page__WEBPACK_IMPORTED_MODULE_6__["QuotesDetailsPage"]]
    })
], QuotesDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LTIwMTkxNTFDQTIvc3JjL2FwcC9wYWdlcy9xdW90ZXMtZGV0YWlscy9xdW90ZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3F1b3Rlcy1kZXRhaWxzL3F1b3Rlcy1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdW90ZXMtZGV0YWlscy9xdW90ZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyBcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/quotes-details/quotes-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/quotes-details/quotes-details.page.ts ***!
  \*************************************************************/
/*! exports provided: QuotesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsPage", function() { return QuotesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_favourite_ser_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/favourite-ser.service */ "./src/app/services/favourite-ser.service.ts");





let QuotesDetailsPage = 
//Similar to character details. view characters details for more references
class QuotesDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.quoteId = null;
        this.isFavourite = false;
    }
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
};
QuotesDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_favourite_ser_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteSerService"] }
];
QuotesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotes-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotes-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotes-details/quotes-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotes-details.page.scss */ "./src/app/pages/quotes-details/quotes-details.page.scss")).default]
    })
    //Similar to character details. view characters details for more references
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_favourite_ser_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteSerService"]])
], QuotesDetailsPage);



/***/ }),

/***/ "./src/app/services/favourite-ser.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/favourite-ser.service.ts ***!
  \***************************************************/
/*! exports provided: FavouriteSerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteSerService", function() { return FavouriteSerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");



const STORAGE_KEY = 'favouriteQuote';
let FavouriteSerService = 
//Despite of the wronge name, this favorite service will be use for quotes
class FavouriteSerService {
    constructor(storage) {
        this.storage = storage;
    }
    getAllFavouriteQuotes() {
        return this.storage.get(STORAGE_KEY);
    }
    isFavourite(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            return result && result.indexOf(quoteId) !== -1;
        });
    }
    favouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                result.push(quoteId);
                return this.storage.set(STORAGE_KEY, result);
            }
            else {
                return this.storage.set(STORAGE_KEY, [quoteId]);
            }
        });
    }
    unfavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                var index = result.indexOf(quoteId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }
};
FavouriteSerService.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
FavouriteSerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
    //Despite of the wronge name, this favorite service will be use for quotes
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], FavouriteSerService);



/***/ })

}]);
//# sourceMappingURL=quotes-details-quotes-details-module-es2015.js.map