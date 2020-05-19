(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--All the data for this app was retrived using the Breaking bad api (ref: https://breakingbadapi.com/) \nfor structure this app, pages and some of the logic, I used the classes and presentations provided by Mikhail Timofeev\nthis structure is similar for the others pages (that are not details)-->\n<ion-header>\n\t<ion-toolbar color=\"tertiary\">\n\t\t<!--Styling in line-->\n\t\t<ion-title class=\"ion-text-center\">Characters</ion-title>\n\t\t<!---This is the title of the tab selected-->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-list>\n\t\t<!--This list will call all the characters existent in the array-->\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let character of characters\" (click)=\"openDetails(character)\">\n\t\t\t<!--This is displayed as a button that when clicked access the details page-->\n\t\t\t<!--The function avatar makes possible display images infront of the names of each caracter-->\n\t\t\t<ion-avatar slot=\"start\"><img src=\"{{ character.img }}\"> </ion-avatar> {{  character.name }}\n\t\t</ion-item>\n\t</ion-list>\n\n\t<!--Html code for infinit scrool\n    * The threshold tells the limit you have to ative to start loading new characters\n    *5% will scroll almost to the end of the page for than start loading again\n    * ref: Simon Grimm (https://www.youtube.com/watch?v=NBeExE9dvR0)-->\n\t<ion-infinite-scroll threshold=\"5%\" (ionInfinite)=\"loadMore($event)\">\n\t\t<ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more characters...\">\n\t\t\t<!--loading text will be displayed while te information is accessed in the api-->\n\t\t</ion-infinite-scroll-content>\n\t</ion-infinite-scroll>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/characters/characters-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/characters/characters-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CharactersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function() { return CharactersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");




const routes = [
    {
        path: '',
        component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }
];
let CharactersPageRoutingModule = class CharactersPageRoutingModule {
};
CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.module.ts ***!
  \*******************************************************/
/*! exports provided: CharactersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function() { return CharactersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-routing.module */ "./src/app/pages/characters/characters-routing.module.ts");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");







let CharactersPageModule = class CharactersPageModule {
};
CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]
        ],
        declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })
], CharactersPageModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/characters/characters.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/characters/characters.page.ts ***!
  \*****************************************************/
/*! exports provided: CharactersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPage", function() { return CharactersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




/*All the data for this app was retrived using the Breaking bad api (ref: https://breakingbadapi.com/)
*for structure this app, pages and some of the logic, I used the classes and presentations provided by Mikhail Timofeev
*/
//In the component all pages related to the characters are linked. 
let CharactersPage = class CharactersPage {
    //This variables are important to implement the infinit scroll method, To create the logic I based on the video of Simon Grimm (ref: https://www.youtube.com/watch?v=NBeExE9dvR0)
    constructor(router, api) {
        this.router = router;
        this.api = api;
        //Creation of an array to organize the characters taken from API
        this.characters = [];
        //Starting page
        this.page = 0;
    }
    ngOnInit() {
        this.loadCharacters(); //In the main method the loadCharactes method is called
    }
    //The paramenter event is linked in the html code. that will result in the activation of this method
    loadCharacters(event) {
        this.api.getCharacters(this.page).subscribe(data => {
            console.log('my data: ', data);
            //This method will separate the whole array in many pages. This pages contain the quantity of characters selected in the load more method
            this.characters = this.characters.concat(data);
            if (event) {
                event.target.complete(); //This method will load only the amount of the characters selected. 
            }
        });
    }
    //After load 20 character the page stops, it will not load more until this function is called
    //when this function will be called is told by the 'threshold="5%"' code in the html file
    loadMore(event) {
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
};
CharactersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./characters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./characters.page.scss */ "./src/app/pages/characters/characters.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], CharactersPage);



/***/ })

}]);
//# sourceMappingURL=characters-characters-module-es2015.js.map