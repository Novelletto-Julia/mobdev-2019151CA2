function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-details-characters-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharactersDetailsCharactersDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<!--The toolbar will have information as the button to go back to characters, name of the character and the favorite button -->\n\t<ion-toolbar>\n\t\t<ion-button slot=\"start\">\n\t\t\t<!--The slot select the place in which the button will apper, start is at left, end is right-->\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-button>\n\t\t<!--The title in this case is the character name, variable passed from the characters page-->\n\t\t<ion-title class=\"ion-text-center\">{{ character?.name }}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<!--this buttons favorite and unfavorite is responsable to activate the favorites methods and store the option chose for each character-->\n\t\t\t<ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"heart\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<!--In here they call the method and define if it is favorite or not, in the case, not favorite-->\n\t\t\t\t<ion-icon name=\"heart-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<!--This call the method to get information from the api, after that is possible to display information using the variable name from the api-->\n\t<ion-card *ngIf=\"character\">\n\n\t\t<ion-card-content>\n\t\t\t<img src=\"{{ character.img }}\" class=\"center\">\n\t\t\t<!--Display the image of each character-->\n\t\t</ion-card-content>\n\n\t\t<!--name and other details. The details will be different from each page of course-->\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Nickname:</u></b> {{ character.nickname }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p><b><u>Birthday:</u></b> {{ character.birthday }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Occupation:</u></b> {{ character.occupation }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Dead or Alive:</u></b> {{ character.status }} </p>\n\t\t</ion-card-content>\n\n\t\t<ion-card-content>\n\t\t\t<p> <b><u>Actor/Actress:</u></b> {{ character.portrayed }} </p>\n\t\t</ion-card-content>\n\n\t</ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/characters-details/characters-details-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/characters-details/characters-details-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: CharactersDetailsPageRoutingModule */

  /***/
  function srcAppPagesCharactersDetailsCharactersDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersDetailsPageRoutingModule", function () {
      return CharactersDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _characters_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./characters-details.page */
    "./src/app/pages/characters-details/characters-details.page.ts");

    var routes = [{
      path: '',
      component: _characters_details_page__WEBPACK_IMPORTED_MODULE_3__["CharactersDetailsPage"]
    }];

    var CharactersDetailsPageRoutingModule = function CharactersDetailsPageRoutingModule() {
      _classCallCheck(this, CharactersDetailsPageRoutingModule);
    };

    CharactersDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharactersDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/characters-details/characters-details.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/characters-details/characters-details.module.ts ***!
    \***********************************************************************/

  /*! exports provided: CharactersDetailsPageModule */

  /***/
  function srcAppPagesCharactersDetailsCharactersDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersDetailsPageModule", function () {
      return CharactersDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _characters_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./characters-details-routing.module */
    "./src/app/pages/characters-details/characters-details-routing.module.ts");
    /* harmony import */


    var _characters_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./characters-details.page */
    "./src/app/pages/characters-details/characters-details.page.ts");

    var CharactersDetailsPageModule = function CharactersDetailsPageModule() {
      _classCallCheck(this, CharactersDetailsPageModule);
    };

    CharactersDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _characters_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersDetailsPageRoutingModule"]],
      declarations: [_characters_details_page__WEBPACK_IMPORTED_MODULE_6__["CharactersDetailsPage"]]
    })], CharactersDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/characters-details/characters-details.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/characters-details/characters-details.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharactersDetailsCharactersDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*This is the style thatis specific for this page\n *all stiling of the image that this page contain is in here\n */\nimg {\n  border: 2px solid var(--ion-color-secondary);\n  border-radius: 8px;\n  width: 100%;\n  height: auto;\n}\nion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LTIwMTkxNTFDQTIvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzLWRldGFpbHMvY2hhcmFjdGVycy1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVycy1kZXRhaWxzL2NoYXJhY3RlcnMtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUFHQTtFQUNJLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcmFjdGVycy1kZXRhaWxzL2NoYXJhY3RlcnMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlRoaXMgaXMgdGhlIHN0eWxlIHRoYXRpcyBzcGVjaWZpYyBmb3IgdGhpcyBwYWdlXG4gKmFsbCBzdGlsaW5nIG9mIHRoZSBpbWFnZSB0aGF0IHRoaXMgcGFnZSBjb250YWluIGlzIGluIGhlcmVcbiAqL1xuaW1nIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTsgLy9JIHVzZWQgVzMgU2Nob29scyBmb3IgY3NzIHN0eWxpbmcgZ3VpZGVsaW5lc1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG4vL0lvbi1pY29uIGlzIHN0eWxlZCBpbiBhbGwgeHh4LmRldGFpbHMucGFnZS5zY3NzcyBhcyBhbGwgb2YgdGhlbSBjb250YWluIHRoZSBzYW1lIGljb25cbmlvbi1pY29ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IFxufVxuXG4iLCIvKlRoaXMgaXMgdGhlIHN0eWxlIHRoYXRpcyBzcGVjaWZpYyBmb3IgdGhpcyBwYWdlXG4gKmFsbCBzdGlsaW5nIG9mIHRoZSBpbWFnZSB0aGF0IHRoaXMgcGFnZSBjb250YWluIGlzIGluIGhlcmVcbiAqL1xuaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/characters-details/characters-details.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/characters-details/characters-details.page.ts ***!
    \*********************************************************************/

  /*! exports provided: CharactersDetailsPage */

  /***/
  function srcAppPagesCharactersDetailsCharactersDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersDetailsPage", function () {
      return CharactersDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_favourite_char_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/favourite-char.service */
    "./src/app/services/favourite-char.service.ts");

    var CharactersDetailsPage = /*#__PURE__*/function () {
      //is important this variable start as false, othewise all characters start as favorite
      function CharactersDetailsPage(activatedRoute, api, favouriteCharService) {
        _classCallCheck(this, CharactersDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteCharService = favouriteCharService;
        this.characterId = null; //id of selected character

        this.isFavourite = false; //this character is selected as a favorite or not
      }

      _createClass(CharactersDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          /*This is the main block
           *In here the information of the character id selecte in the page characters will be passed
           */
          this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getCharacter(this.characterId).subscribe(function (res) {
            _this.character = res[0];
            console.log(JSON.stringify(_this.character.char_id)); // and this character chooosen must be displayed in the screen
            //In the characterDetails.html will be request all the information from the character thar should be displayed
          }); //Also in the main method the favorit service is called.

          this.favouriteCharService.isFavourite(this.characterId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        } //This methods works in the case the user select the character as favorite

      }, {
        key: "favouriteCharacter",
        value: function favouriteCharacter() {
          var _this2 = this;

          this.favouriteCharService.favouriteCharacter(this.characterId).then(function () {
            _this2.isFavourite = true;
          });
        } //This method works in case the user select the chacter as not favorit

      }, {
        key: "unfavouriteCharacter",
        value: function unfavouriteCharacter() {
          var _this3 = this;

          this.favouriteCharService.unfavouriteCharacter(this.characterId).then(function () {
            _this3.isFavourite = false;
          }); //This two methods work togheter, this create the opition to select as favorite and then if change you mind change for not favorite
        }
      }]);

      return CharactersDetailsPage;
    }();

    CharactersDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _services_favourite_char_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteCharService"]
      }];
    };

    CharactersDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characters-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters-details/characters-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characters-details.page.scss */
      "./src/app/pages/characters-details/characters-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_favourite_char_service__WEBPACK_IMPORTED_MODULE_4__["FavouriteCharService"]])], CharactersDetailsPage);
    /***/
  },

  /***/
  "./src/app/services/favourite-char.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/favourite-char.service.ts ***!
    \****************************************************/

  /*! exports provided: FavouriteCharService */

  /***/
  function srcAppServicesFavouriteCharServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavouriteCharService", function () {
      return FavouriteCharService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js"); //To build the logic of favorite system I used the classes and presentations provided by Mikhail Timofeev
    //I create one favorite page for each details page. All the logic is the same for all pages

    /* First of all a storage was created in the ionic
    * and a variable to store the value that must be add in the storage (STORAGE_KEY)
    */


    var STORAGE_KEY = 'favouriteCharacter';

    var FavouriteCharService = /*#__PURE__*/function () {
      //The storage will be called in the constructor 
      function FavouriteCharService(storage) {
        _classCallCheck(this, FavouriteCharService);

        this.storage = storage;
      } //This method makes possible to get all save as favorite. This is important to check if a character is favorite already, if this is the case, on click it must 
      //turn not favorite anymore, the reverse is also true


      _createClass(FavouriteCharService, [{
        key: "getAllFavouriteCharacters",
        value: function getAllFavouriteCharacters() {
          return this.storage.get(STORAGE_KEY);
        } //This method will check is the character is already favorite. As explained above, it will use the method get all the favorite for that

      }, {
        key: "isFavourite",
        value: function isFavourite(charId) {
          return this.getAllFavouriteCharacters().then(function (result) {
            return result && result.indexOf(charId) !== -1;
          });
        } //This method will will the character in faorite, it is possible when the character is not yet favorite

      }, {
        key: "favouriteCharacter",
        value: function favouriteCharacter(charId) {
          var _this4 = this;

          return this.getAllFavouriteCharacters().then(function (result) {
            if (result) {
              result.push(charId);
              return _this4.storage.set(STORAGE_KEY, result);
            } else {
              return _this4.storage.set(STORAGE_KEY, [charId]);
            }
          });
        } //This method will make a favorite character became not favorite anymore. Its only possible if the character is already favorite

      }, {
        key: "unfavouriteCharacter",
        value: function unfavouriteCharacter(charId) {
          var _this5 = this;

          return this.getAllFavouriteCharacters().then(function (result) {
            if (result) {
              var index = result.indexOf(charId);
              result.splice(index, 1);
              return _this5.storage.set(STORAGE_KEY, result);
            }
          });
        }
      }]);

      return FavouriteCharService;
    }();

    FavouriteCharService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    FavouriteCharService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], FavouriteCharService);
    /***/
  }
}]);
//# sourceMappingURL=characters-details-characters-details-module-es5.js.map