(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\"><app-header></app-header></div><div class=\"content\"><router-outlet></router-outlet></div>"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 75px;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'personal-site';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/info-card/info-card.component */ "./src/app/components/info-card/info-card.component.ts");
/* harmony import */ var _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/resume/resume.component */ "./src/app/components/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    {
        path: '',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"]
    },
    {
        path: 'projects',
        component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    },
    {
        path: 'resume',
        component: _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"]
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_9__["InfoCardComponent"],
                _components_resume_resume_component__WEBPACK_IMPORTED_MODULE_10__["ResumeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-info-card *ngFor=\"let card of this.boxes\" [card]=\"card\"></app-info-card>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.styl":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.styl ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/components/contact/contact.component.css.map */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(contentService) {
        this.contentService = contentService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.boxes = this.contentService.contact;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.styl */ "./src/app/components/contact/contact.component.styl")]
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-head\"><a class=\"myname\" routerLink=\"/\">Matthew Doto</a><div *ngFor=\"let link of this.links\"><a class=\"headerlink\" *ngIf=\"link.type === this.headerLinkType.link\" href=\"{{link.href}}\" target=\"_blank\">{{link.name}}</a><a class=\"headerlink\" *ngIf=\"link.type === this.headerLinkType.page\" routerLink=\"{{link.href}}\">{{link.name}}</a></div></div>"

/***/ }),

/***/ "./src/app/components/header/header.component.styl":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-head {\n  width: 100%;\n  margin: 0px;\n  background-color: #222;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 20px;\n  vertical-align: center;\n  height: 75px;\n}\n.headerlink {\n  transition: background-color 0.3s, border-radius 0.5s, padding 0.3s linear, margin-left 0.3s linear, margin-right 0.3s linear, margin-top 0.3s linear;\n  color: #fff;\n  display: inline-block;\n  height: 55px;\n  line-height: 55px;\n  float: right;\n  margin-right: 10px;\n  padding: 10px;\n  text-decoration: none;\n}\n.headerlink:hover {\n  border-radius: 5px;\n  background-color: #333;\n  padding: 5px;\n  margin-left: 5px;\n  margin-right: 15px;\n  margin-top: 3px;\n  cursor: pointer;\n}\n.myname {\n  height: 20px;\n  line-height: 27px;\n  color: #fff;\n  vertical-align: middle;\n  display: inline-block;\n  margin-left: 15px;\n  margin-top: 17.5px;\n  margin-bottom: 17.5px;\n  float: left;\n  padding: 10px;\n  text-decoration: none;\n  background-color: #181818;\n  border-radius: 10px;\n  transition: margin-top 0.3s linear;\n}\n.myname:hover {\n  margin-top: 15.5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=src/app/components/header/header.component.css.map */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _models_headerLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/headerLink */ "./src/app/models/headerLink.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(contentService) {
        this.contentService = contentService;
    }
    Object.defineProperty(HeaderComponent.prototype, "headerLinkType", {
        get: function () { return _models_headerLink__WEBPACK_IMPORTED_MODULE_2__["HeaderLinkType"]; },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.ngOnInit = function () {
        this.links = this.contentService.headers;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.styl */ "./src/app/components/header/header.component.styl")]
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-info-card *ngFor=\"let card of this.boxes\" [card]=\"card\"></app-info-card>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.styl":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/components/homepage/homepage.component.css.map */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(contentService) {
        this.contentService = contentService;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.boxes = this.contentService.about;
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.styl */ "./src/app/components/homepage/homepage.component.styl")]
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/info-card/info-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/info-card/info-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bodybox\"><a *ngIf=\"this.card.href\" href=\"{{this.card.href}}\"><h1>{{this.card.title}}</h1></a><h1 *ngIf=\"!this.card.href &amp;&amp; this.card.title\">{{this.card.title}}</h1><hr *ngIf=\"this.card.title\"/><p>{{this.card.description}}</p></div>"

/***/ }),

/***/ "./src/app/components/info-card/info-card.component.styl":
/*!***************************************************************!*\
  !*** ./src/app/components/info-card/info-card.component.styl ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bodybox {\n  display: block;\n  margin: 10px;\n  padding: 10px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  text-align: center;\n  align-content: center;\n  border-color: #ddd;\n  border-width: 1px;\n  border-style: solid;\n  box-shadow: 0px 5px 10px -5px;\n  border-radius: 10px;\n  transition: box-shadow 0.5s, border-radius 0.5s;\n}\n.bodybox:hover {\n  box-shadow: 0px 5px 10px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=src/app/components/info-card/info-card.component.css.map */"

/***/ }),

/***/ "./src/app/components/info-card/info-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/info-card/info-card.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoCardComponent = /** @class */ (function () {
    function InfoCardComponent() {
    }
    InfoCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InfoCardComponent.prototype, "card", void 0);
    InfoCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-card',
            template: __webpack_require__(/*! ./info-card.component.html */ "./src/app/components/info-card/info-card.component.html"),
            styles: [__webpack_require__(/*! ./info-card.component.styl */ "./src/app/components/info-card/info-card.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoCardComponent);
    return InfoCardComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-info-card *ngFor=\"let card of this.boxes\" [card]=\"card\"></app-info-card>"

/***/ }),

/***/ "./src/app/components/projects/projects.component.styl":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/components/projects/projects.component.css.map */"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(contentService) {
        this.contentService = contentService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.boxes = this.contentService.projects;
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.styl */ "./src/app/components/projects/projects.component.styl")]
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><object class=\"fullscreen\" data=\"./assets/resume.pdf\" type=\"application/pdf\">Couldn't load pdf</object></div>"

/***/ }),

/***/ "./src/app/components/resume/resume.component.styl":
/*!*********************************************************!*\
  !*** ./src/app/components/resume/resume.component.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullscreen {\n  width: 100%;\n  height: 100%;\n}\n.container {\n  position: absolute;\n  top: 75px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  line-height: 0;\n}\n/*# sourceMappingURL=src/app/components/resume/resume.component.css.map */"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/resume/resume.component.ts ***!
  \*******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.styl */ "./src/app/components/resume/resume.component.styl")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/models/headerLink.ts":
/*!**************************************!*\
  !*** ./src/app/models/headerLink.ts ***!
  \**************************************/
/*! exports provided: HeaderLinkType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderLinkType", function() { return HeaderLinkType; });
var HeaderLinkType;
(function (HeaderLinkType) {
    HeaderLinkType[HeaderLinkType["link"] = 0] = "link";
    HeaderLinkType[HeaderLinkType["page"] = 1] = "page";
})(HeaderLinkType || (HeaderLinkType = {}));


/***/ }),

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_headerLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/headerLink */ "./src/app/models/headerLink.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentService = /** @class */ (function () {
    function ContentService() {
        this.headers = [
            {
                name: 'Resume',
                type: _models_headerLink__WEBPACK_IMPORTED_MODULE_1__["HeaderLinkType"].page,
                href: 'resume'
            },
            {
                name: 'LinkedIn',
                type: _models_headerLink__WEBPACK_IMPORTED_MODULE_1__["HeaderLinkType"].link,
                href: 'https://www.linkedin.com/in/matt-doto'
            },
            {
                name: 'GitHub',
                type: _models_headerLink__WEBPACK_IMPORTED_MODULE_1__["HeaderLinkType"].link,
                href: 'https://www.github.com/cheeseypi'
            },
            {
                name: 'Contact',
                type: _models_headerLink__WEBPACK_IMPORTED_MODULE_1__["HeaderLinkType"].page,
                href: 'contact'
            },
            {
                name: 'Projects',
                type: _models_headerLink__WEBPACK_IMPORTED_MODULE_1__["HeaderLinkType"].page,
                href: 'projects'
            }
        ];
        // noinspection TsLint
        this.projects = [
            {
                title: 'McKinsey NSM',
                description: 'The Network State Master for McKinsey & Company. Allows for a single point of contact to get information about all intranet network devices. Has both a GUI and an API portion, both initially developed by me in Summer 2017 up to a Minimum Viable Product, allowing for users to dynamically receive up-to-date network information within programs or on the website. I continued working on it in my Spring 2018 internship there, and it is now in production use.'
            },
            {
                title: 'GroupMe Score Tracker',
                href: 'https://pypi.org/project/groupmescoretracker/',
                description: 'A bot for GroupMe that allows for users to track arbitrary "scores". Use it to spice up your group chats with a little friendly competition!',
            },
            {
                title: 'TravelPet Backend API',
                href: 'https://github.com/DuckHacksS2018-shrugface/travelpet-api',
                description: 'Project for DuckHacks 2018; A cloud-based virtual pet API. Taking the tamagotchis of old into the cloud!'
            }
        ];
        // noinspection TsLint
        this.contact = [
            {
                title: 'matt@mattdoto.com',
                href: 'mailto:matt@mattdoto.com',
                description: 'I can be reached via email or via direct message on LinkedIn.'
            },
            {
                description: 'Eventually, there will be a direct contact form present here. Check back regularly!'
            }
        ];
        this.about = [
            {
                description: 'I am a software developer & general computer nerd'
            },
            {
                description: 'I am in my third year at Stevens Institute of Technology'
            }
        ];
    }
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mdoto/Projects/personal-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map