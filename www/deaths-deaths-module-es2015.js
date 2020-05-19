(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deaths-deaths-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Similar to characters. view characters for references-->\n<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-title class=\"ion-text-center\">Total number of deaths</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-card>\n\t\t<p>This is the number total of deaths in the series. If you like, is possible to look for a character in the\n\t\t\tsearch and see how many people he/she was responsable for the death!</p>\n\t\t<br>\n\t\t<p>Go aready and look for you killer!</p>\n\t</ion-card>\n\t<!--To create the search system I used as base a post in a forum by wlangiewicz user (ref: https://forum.ionicframework.com/t/ionic-ion-searchbar-searching-only-when-enter-is-pressed/42003)-->\n\t<ion-searchbar [(ngModel)]=\"death\" (ionChange)=\"search($event)\" placeholder=\"Search for a murderer\"></ion-searchbar>\n\n\t<ion-card class=\"center\" *ngFor=\"let death of deaths | async\">\n\n\n\t\t<h1 class=\"ion-text-center\"><b>{{ death.deathCount }} </b></h1>\n\t\t<!--Display the total number of deaths-->\n\n\t</ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/deaths/deaths-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/deaths/deaths-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DeathsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPageRoutingModule", function() { return DeathsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deaths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deaths.page */ "./src/app/pages/deaths/deaths.page.ts");




const routes = [
    {
        path: '',
        component: _deaths_page__WEBPACK_IMPORTED_MODULE_3__["DeathsPage"]
    }
];
let DeathsPageRoutingModule = class DeathsPageRoutingModule {
};
DeathsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/deaths/deaths.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/deaths/deaths.module.ts ***!
  \***********************************************/
/*! exports provided: DeathsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPageModule", function() { return DeathsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deaths-routing.module */ "./src/app/pages/deaths/deaths-routing.module.ts");
/* harmony import */ var _deaths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deaths.page */ "./src/app/pages/deaths/deaths.page.ts");







let DeathsPageModule = class DeathsPageModule {
};
DeathsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deaths_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathsPageRoutingModule"]
        ],
        declarations: [_deaths_page__WEBPACK_IMPORTED_MODULE_6__["DeathsPage"]]
    })
], DeathsPageModule);



/***/ }),

/***/ "./src/app/pages/deaths/deaths.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/deaths/deaths.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  text-align: left;\n  color: red;\n}\n\np {\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9iZGV2LTIwMTkxNTFDQTIvc3JjL2FwcC9wYWdlcy9kZWF0aHMvZGVhdGhzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGVhdGhzL2RlYXRocy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNPLG1CQUFBO0FDQ1AiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWF0aHMvZGVhdGhzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5we1xuICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59IiwiaDEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmVkO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/deaths/deaths.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/deaths/deaths.page.ts ***!
  \*********************************************/
/*! exports provided: DeathsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathsPage", function() { return DeathsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




//Similar to characters. view characters for references
let DeathsPage = class DeathsPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
    }
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
};
DeathsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DeathsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deaths',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deaths.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deaths/deaths.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deaths.page.scss */ "./src/app/pages/deaths/deaths.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], DeathsPage);



/***/ })

}]);
//# sourceMappingURL=deaths-deaths-module-es2015.js.map