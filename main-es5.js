(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n    <ul class=\"nav navbar-nav\">\n      <li>\n        <a routerLinkActive='active' routerLink='list' >List-All</a>\n      </li>\n      <li>\n        <a routerLinkActive='active' routerLink='create' >Create-One</a>\n      </li>\n    </ul>\n  </nav>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/provision/create-provision.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/provision/create-provision.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [(formGroup)]=\"provisionForm\"  class=\"form-horizontal\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Create Employee</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error': provisionForm.get('ItemName').errors &&\n        (provisionForm.get('ItemName').touched || provisionForm.get('ItemName').dirty)}\">\n\n        <label class=\"col-sm-2 control-label\" for=\"ItemName\">Item Name</label>\n        <div class=\"col-sm-8\">\n          <input id=\"ItemName\" type=\"text\" class=\"form-control\" formControlName=\"ItemName\">\n\n          <span class=\"help=block\" *ngIf=\"provisionForm.get('ItemName').errors &&\n            (provisionForm.get('ItemName').touched ||provisionForm.get('ItemName').dirty)\">\n            <span *ngIf=\"provisionForm.get('ItemName').errors.required\">\n              Full Name is Required\n            </span>\n            <span *ngIf=\"(provisionForm.get('ItemName').errors.minlength ||\n              provisionForm.get('ItemName').errors.maxlength)\">\n              Full Name should be between 2 to 10 charcters\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <!-- Qty input element -->\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\" for=\"Itemquantity\">Qty</label>\n        <div class=\"col-sm-8\">\n          <input id=\"Itemquantity\" type=\"text\" class=\"form-control\" formControlName=\"Itemquantity\">\n        </div>\n      </div>\n\n      <!-- <div class=\"dropdown\">\n          <label class=\"col-sm-2 control-label\" for=\"Orderby\">Orderby</label>\n            <ul class=\"dropdown-menu\">\n              <li>Sumita</li>\n              <li>Chandra</li>\n            </ul>\n        </div> -->\n        <!-- <div class=\"dropdown\">\n            <label class=\"col-sm-2 control-label\" for=\"Orderby\">Orderby</label>\n            <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Orderby\n            <span class=\"caret\"></span></button>\n            <ul class=\"dropdown-menu\">\n                <li>Sumita</li>\n                <li>Chandra</li>\n            </ul>\n          </div> -->\n<!-- \n      <div formGroupName=\"skills\">\n\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\" for=\"skillName\">\n            Skill\n          </label>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" class=\"form-control\" id=\"skillName\" formControlName=\"skillName\" placeholder=\"Name\">\n          </div>\n          <div class=\"col-sm-4\">\n            <input type=\"text\" placeholder=\"Experience in Years\" class=\"form-control\"\n              formControlName=\"ExperienceInYears\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"col-md-2 control-label\">Proficiency</label>\n          <div class=\"col-md-8\">\n            <label class=\"radio-inline\">\n              <input id=\"proficiency\" type=\"radio\" value=\"beginner\" formControlName=\"proficiency\">Beginner\n            </label>\n            <label class=\"radio-inline\">\n              <input id=\"proficiency\" type=\"radio\" value=\"intermediate\" formControlName=\"proficiency\">Intermediate\n            </label>\n            <label class=\"radio-inline\">\n              <input id=\"proficiency\" type=\"radio\" value=\"advanced\" formControlName=\"proficiency\">Advanced\n            </label>\n          </div>\n        </div>\n      </div> -->\n\n    </div>\n    <div class=\"panel-footer\">\n      <div class=\"btn-toolbar\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"onSubmit()\">Save</button>\n      </div>\n    </div>\n  </div>\n</form>\n<app-list-provision></app-list-provision>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/provision/list-provision.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/provision/list-provision.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"\">\n  <table class=\"table\">\n      <tr>       \n        <th scope=\"col\">\n            Item\n          </th>\n          <th scope=\"col\">\n              Qty\n            </th>\n            <th scope=\"col\">\n                Ordered By\n              </th>\n      </tr>\n      <tr *ngFor=\"let data of DataFromAPi\">\n        <td>{{ data.Itemname }}</td>\n        <td> {{ data.Itemquantity }}</td>\n        <td> {{ data.Enteredby }}</td>\n      </tr>\n    </table>\n    \n</form>"

/***/ }),

/***/ "./src/app/Services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        // tslint:disable-next-line:no-inferrable-types
        this.baseUrl = 'https://homeprovisionmanagementapi20190612025500.azurewebsites.net/api/Provision';
    }
    DataService.prototype.getProvision = function () {
        return this._http.get(this.baseUrl + '/5');
    };
    DataService.prototype.saveProvision = function (provisionForm) {
        return this._http.post(this.baseUrl, JSON.stringify(provisionForm), httpOptions);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provision_list_provision_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provision/list-provision.component */ "./src/app/provision/list-provision.component.ts");
/* harmony import */ var _provision_create_provision_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provision/create-provision.component */ "./src/app/provision/create-provision.component.ts");





var routes = [
    { path: 'list', component: _provision_list_provision_component__WEBPACK_IMPORTED_MODULE_3__["ListProvisionComponent"] },
    { path: 'create', component: _provision_create_provision_component__WEBPACK_IMPORTED_MODULE_4__["CreateProvisionComponent"] },
    { path: '', redirectTo: '/list', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'HomeProvisionManagement Apps';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'chandra-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _provision_create_provision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provision/create-provision.component */ "./src/app/provision/create-provision.component.ts");
/* harmony import */ var _provision_list_provision_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provision/list-provision.component */ "./src/app/provision/list-provision.component.ts");
/* harmony import */ var _Services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/data.service */ "./src/app/Services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _provision_create_provision_component__WEBPACK_IMPORTED_MODULE_6__["CreateProvisionComponent"],
                _provision_list_provision_component__WEBPACK_IMPORTED_MODULE_7__["ListProvisionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_Services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            exports: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/provision/create-provision.component.css":
/*!**********************************************************!*\
  !*** ./src/app/provision/create-provision.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Zpc2lvbi9jcmVhdGUtcHJvdmlzaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/provision/create-provision.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/provision/create-provision.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateProvisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProvisionComponent", function() { return CreateProvisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/data.service */ "./src/app/Services/data.service.ts");




var CreateProvisionComponent = /** @class */ (function () {
    // validationMessages = {
    //   'fullName': {
    //     'required': 'Full Name is Required ',
    //     'minlength': 'Full Name should be greater than 2 ',
    //     'maxlength': 'Full Name should be less than 10 ',
    //   },
    //   'email': {
    //     'required': 'Email is required'
    //   },
    //   'skillName': {
    //     'required': 'skill Name is required'
    //   },
    //   'ExperienceInYears': {
    //     'required': 'Experience in Years is required'
    //   },
    //   'proficiency': {
    //     'required': 'proficiency is required'
    //   }
    // };
    // forErrors = {
    //   'fullName': '',
    //   'ContactPreference': '',
    //   'email': '',
    //   'skillName': '',
    //   'ExperienceInYears': '',
    //   'proficiency': ''
    // };
    function CreateProvisionComponent(fb, dbService) {
        this.fb = fb;
        this.dbService = dbService;
    }
    CreateProvisionComponent.prototype.ngOnInit = function () {
        this.provisionForm = this.fb.group({
            ItemName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]],
            Itemquantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            OrderBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        // this.provisionForm.get('fullName').valueChanges.subscribe(
        //   (value: string) => {
        //     this.fullNameLength = value.length;
        //   }
        // );
        // FormControl
        // this.provisionForm = new FormGroup(
        // {
        //     fullName: new FormControl(),
        //     email: new FormControl(),
        //     skills : new FormGroup({
        //      skillName : new FormControl(),
        //      ExperienceInYears : new FormControl(),
        //      proficiency : new FormControl()
        //     })
        // });
    };
    CreateProvisionComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
            else {
                //abstractControl.disable();
            }
        });
    };
    CreateProvisionComponent.prototype.onLoadDataClick = function () {
        var _this = this;
        this.dbService.getProvision().subscribe(function (data) {
            _this.provisionForm.setValue({
                fullName: data[0].fullName,
                email: data[0].email
            });
        });
        // this.provisionForm.setValue({
        //   fullName: 'Chandra Gupta',
        //   email: 'chandragupta@gmail.com',
        //   skills: {
        //     skillName: 'c#',
        //     ExperienceInYears: 6,
        //     proficiency: 'advanced'
        //   }
        // });
        // this.logValidationErrors(this.provisionForm);
    };
    CreateProvisionComponent.prototype.onSubmit = function () {
        this.dbService.saveProvision(this.provisionForm.value).subscribe();
    };
    CreateProvisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-provision',
            template: __webpack_require__(/*! raw-loader!./create-provision.component.html */ "./node_modules/raw-loader/index.js!./src/app/provision/create-provision.component.html"),
            styles: [__webpack_require__(/*! ./create-provision.component.css */ "./src/app/provision/create-provision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CreateProvisionComponent);
    return CreateProvisionComponent;
}());

// function emailDomain(control: AbstractControl): { [Key: string]: any } | null {
//   const email: string = control.value;
//   const domain = email.substring(email.lastIndexOf('@') + 1);
//   if (email === '' || domain.toLowerCase() === 'chandra') {
//     return null;
//   } else {
//     return { 'emailDomain': true };
//   }
// }


/***/ }),

/***/ "./src/app/provision/list-provision.component.css":
/*!********************************************************!*\
  !*** ./src/app/provision/list-provision.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Zpc2lvbi9saXN0LXByb3Zpc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/provision/list-provision.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/provision/list-provision.component.ts ***!
  \*******************************************************/
/*! exports provided: ListProvisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProvisionComponent", function() { return ListProvisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/data.service */ "./src/app/Services/data.service.ts");



var ListProvisionComponent = /** @class */ (function () {
    function ListProvisionComponent(dbService) {
        this.dbService = dbService;
    }
    ListProvisionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dbService.getProvision().subscribe(function (data) {
            _this.DataFromAPi = data;
        });
    };
    ListProvisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-provision',
            template: __webpack_require__(/*! raw-loader!./list-provision.component.html */ "./node_modules/raw-loader/index.js!./src/app/provision/list-provision.component.html"),
            styles: [__webpack_require__(/*! ./list-provision.component.css */ "./src/app/provision/list-provision.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ListProvisionComponent);
    return ListProvisionComponent;
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

module.exports = __webpack_require__(/*! C:\Users\ckengua\HomeProvisionManagement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map