webpackJsonp([12],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthCodePage = /** @class */ (function () {
    function AuthCodePage(navCtrl, navParams, view, alertCtrl, modalCtrl, app, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.auth_code = '';
    }
    AuthCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AuthCodePage');
    };
    /* 关闭页面 */
    AuthCodePage.prototype.close = function () {
        this.view.dismiss();
    };
    /* ========================================================================
     * 用户提交验证码， 发送到后端API验证；
     * 验证成功，跳转页面。验证失败，返回。
    ======================================================================== */
    AuthCodePage.prototype.verify_code = function () {
        var _this = this;
        // 弹出式加载信息框；
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<div class="loader loader--snake"></div>',
            cssClass: 'loader'
        });
        loader.present();
        /* 后端验证 */
        var email = localStorage.getItem("user_email");
        console.log(email);
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post("/auth_sms_code.php", { auth_code: this.auth_code, user_email: email })
            .then(function (res) {
            /* 验证成功 */
            if (!res.data.message) {
                loader.dismiss();
                _this.view.dismiss();
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }
            else {
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'FAIL',
                    subTitle: res.data.message,
                    buttons: [{
                            text: "CLOSE",
                        }]
                }).present();
            }
        }).catch(function (error) {
            loader.dismiss();
        });
    };
    AuthCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-auth-code',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/auth-code/auth-code.html"*/'<ion-header>\n\n  <ion-navbar>\n    <span class="closeBtn" (click)="close()">关闭</span>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="transparent-header">\n  \n  \n  <div padding class="content">\n    <ion-row>\n      <ion-col>\n        <!-- <img class="logo" src="assets/imgs/logo.gif"/> -->\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-list inset class="no-border">\n          <ion-item class="auth_code">\n            <!-- <ion-label>Username</ion-label> -->\n            <ion-input type="text" [(ngModel)]="auth_code" placeholder="Verification Code"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button class="login-button" (click)="verify_code()">VERIFY</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/auth-code/auth-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], AuthCodePage);
    return AuthCodePage;
}());

//# sourceMappingURL=auth-code.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_user_auth__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.email = '';
        this.password = '';
        this.rePassword = '';
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.signUp = function () {
        var _this = this;
        this.validate(function () {
            __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/register.php', {
                email: _this.email,
                password: _this.password
            })
                .then(function (res) {
                //注册失败
                if (res.data.message) {
                    _this.alertCtrl.create({
                        title: 'Reigster failed',
                        subTitle: res.data.message,
                        buttons: ['ok']
                    }).present();
                    return;
                }
                //注册成功
                localStorage.setItem("user_email", _this.email);
                _this.alertCtrl.create({
                    title: 'Success',
                    message: 'Press ok and login',
                    buttons: [
                        {
                            text: 'OK',
                            handler: function () {
                                // this.app.getRootNav().push(UserAuthPage);
                            }
                        }
                    ]
                }).present();
                _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__user_auth_user_auth__["a" /* UserAuthPage */]);
            }).catch(function (error) {
                /* 另外，在app.module.ts 中有拦截器处理异常。 */
                console.log(error);
            });
        });
    };
    RegisterPage.prototype.validate = function (cb) {
        if (isEmpty(this.password) || isEmpty(this.email) || isEmpty(this.rePassword)) {
            var alert_1 = this.alertCtrl.create({
                title: 'Validate failed',
                subTitle: 'All fields are required',
                buttons: ['ok']
            });
            alert_1.present();
            return;
        }
        if (this.password !== this.rePassword) {
            var alert_2 = this.alertCtrl.create({
                title: 'Validate failed',
                subTitle: 'password must be same',
                buttons: ['ok']
            });
            alert_2.present();
            return;
        }
        if (!this.email.includes('@')) {
            var alert_3 = this.alertCtrl.create({
                title: 'Validate failed',
                subTitle: 'Email is not correct',
                buttons: ['ok']
            });
            alert_3.present();
            return;
        }
        cb && cb();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/register/register.html"*/'\n<ion-header class="header">\n\n  <ion-navbar color="milk">\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="transparent-header">\n\n    <div padding class="content">\n      <ion-row>\n        <ion-col>\n          <img class="logo" src="assets/imgs/logo.gif"/>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-list inset class="no-border">\n            <ion-item class="email">\n              <!-- <ion-label>Username</ion-label> -->\n              <ion-input type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" [(ngModel)]="email" placeholder="Email"></ion-input>\n            </ion-item>\n            <ion-item class="email">\n              <!-- <ion-label>Username</ion-label> -->\n              <ion-input type="text" [(ngModel)]="username" placeholder="Username"></ion-input>\n            </ion-item>\n            <ion-item>\n              <!-- <ion-label>Password</ion-label> -->\n              <ion-input type="password" [(ngModel)]="password" placeholder="password"></ion-input> \n            </ion-item>\n            <ion-item>\n              <!-- <ion-label>Password</ion-label> -->\n              <ion-input type="password" [(ngModel)]="rePassword" placeholder="password"></ion-input> \n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button class="login-button" (click)="signUp()">SignUp</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-content>\n\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"]])
    ], RegisterPage);
    return RegisterPage;
}());

function isEmpty(val) {
    return val.trim() === '';
}
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_code_auth_code__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UserAuthPage = /** @class */ (function () {
    function UserAuthPage(navCtrl, loadingCtrl, alertCtrl, menuCtrl, modalCtrl, view) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.phone_number = '';
    }
    UserAuthPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserAuthPage');
    };
    //disable swipe gesture in the page;
    UserAuthPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    /*
    enable swipe gesture when leave this page;
    otherwise, other pages' swipe gesture will be disable too;
    */
    UserAuthPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    /* ==============================================================
    用户输入用户名之后post到后端API处理，并且发送验证码到用户手机；
    发送成功后返回验证码；
    跳转到输入验证码页面；
    ============================================================== */
    UserAuthPage.prototype.send_auth_code = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                /* 监控 input field */
                if (this.phone_number === '') {
                    this.alertCtrl.create({
                        buttons: ['ok'],
                        title: 'Please enter your phone number'
                    }).present();
                    return [2 /*return*/];
                }
                loader = this.loadingCtrl.create({
                    spinner: 'hide',
                    content: '<div class="loader loader--snake"></div>',
                    cssClass: 'loader'
                });
                loader.present();
                /* post到后端API，发送验证码到用户手机，并且返回验证码，储存到本地 */
                __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/send-sms.php', { phone_number: this.phone_number, country_code: '+1' })
                    .then(function (res) {
                    loader.dismiss();
                    /* 如果message为空，说明验证码发送成功 */
                    if (!res.data.message) {
                        /* 将验证码储存到local数据库 */
                        localStorage.setItem('auth_code', res.data.data);
                        /* 跳转页面 */
                        //this.navCtrl.setRoot(AuthCodePage);
                        var page = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__auth_code_auth_code__["a" /* AuthCodePage */]);
                        page.present();
                    }
                    else {
                        _this.alertCtrl.create({
                            title: 'FAIL',
                            subTitle: res.data.message,
                            buttons: ['CLOSE']
                        }).present();
                    }
                }).catch(function (error) {
                    /* 另外，在app.module.ts 中有拦截器处理异常。 */
                    console.log(error);
                    loader.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    /**==============================================================
     *
     * @param phone_number: (String) 用户手机号
     * @return: 添加国家区号
     * 给用户手机号添加区号，暂时这样写。之后在前端让用户选择国家区号；
    ============================================================== */
    UserAuthPage.prototype.append_country_code = function (phone_number) {
        return "+1" + phone_number;
    };
    UserAuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-auth',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/user-auth/user-auth.html"*/'<ion-content padding class="transparent-header">\n  \n  \n  <div padding class="content">\n    <ion-row>\n      <ion-col>\n        <!-- <img class="logo" src="assets/imgs/logo.gif"/> -->\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-list inset class="no-border">\n          <ion-item class="user_name">\n            <!-- <ion-label>Username</ion-label> -->\n            <ion-input type="text" [(ngModel)]="phone_number" placeholder="Phone Number"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button class="login-button" (click)="send_auth_code()">Send Verification Code</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/user-auth/user-auth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], UserAuthPage);
    return UserAuthPage;
}());

//# sourceMappingURL=user-auth.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.id = '';
        this.email = '';
        //this.fetchInfomation()
    }
    InformationPage.prototype.ionViewWillEnter = function () {
        this.fetchInfomation();
    };
    /*
    从数据库中提取数据; 将数据绑定到前端界面；
    */
    InformationPage.prototype.fetchInfomation = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/info.php', { email: email })
            .then(function (res) {
            var _a = res.data.data, id = _a.id, email = _a.email;
            _this.id = id;
            _this.email = email;
        }).catch(function (error) {
            console.log(error);
        });
    };
    /* 由前端的 log out 按键触发； */
    InformationPage.prototype.logout = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm logout?',
            message: 'You will exit and need login again?',
            buttons: [
                {
                    text: 'Stay',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Agree',
                    handler: function () {
                        localStorage.removeItem('isLogin');
                        localStorage.removeItem('email');
                        //this.navCtrl.setRoot(LoginPage)
                        /*
                        this.app.getRootNav().push(), will hide tabs in child component
                        xxx.setRoot(), will hide tabs and set root page from top level;
                        */
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-information',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/information/information.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>\n          Personal\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n  <ion-list class="top-list">\n      <button ion-item [navPush]="userInfoPage" class="top-list-item">\n          <ion-thumbnail item-start class="thumbnail">\n              <img src="./assets/icon/shuying.png">\n          </ion-thumbnail>\n          <h2>{{id}}</h2>\n          <p>Account：{{email}}</p>\n      </button>\n  </ion-list>\n\n  <ion-list class="list">\n      <ion-item class="list-item">\n          <ion-icon name="logo-twitter" style="color: #55acee"></ion-icon> \n          <span class="ionitem_text">Share</span>\n      </ion-item>\n      <button ion-item class="list-item">\n          <ion-icon name="compass" style="color: #31a56e"></ion-icon>\n          <span class="ionitem_text">donation</span>\n      </button>\n      <button ion-item class="list-item">\n          <ion-icon name="cube" style="color: #584f60"></ion-icon>\n          <span class="ionitem_text">activity</span>\n      </button>\n  </ion-list>\n\n  <ion-list class="list">\n      <button ion-item class="list-item">\n          Version\n          <span  item-end>V1.0</span>\n      </button>\n      <button ion-item class="list-item">\n          About\n      </button>\n  </ion-list>\n\n  <!-- <ion-item class="log_out_text" (click)="showConfirm()">\n      <span>Log Out</span>\n  </ion-item> -->\n\n  <ion-list>\n      <img src="assets/imgs/off.png" class="off-icon" (click)=\'logout()\'>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chart1_chart1__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationPage = /** @class */ (function () {
    function NavigationPage(navCtrl, navParams, app, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    NavigationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NavigationPage');
    };
    //direct to page, meanwhile we want to hide tabs
    NavigationPage.prototype.goToChart1 = function () {
        /*
        direct to a new page, or using navCtrl.push();
        but in Android, users may use return key build on the phone to go back;
        */
        //this.app.getRootNav().push(Chart1Page);
        /*
        Useing modalController to create a current page. Since modal is not reusable,
        when a modal is dismissed it is destroyed. Use ViewController to dismiss any modal;
        */
        var SecondPage = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__chart1_chart1__["a" /* Chart1Page */]);
        SecondPage.present();
    };
    NavigationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-navigation',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/navigation/navigation.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>navigation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid class="nav_grid">\n    <ion-row>\n      <ion-col>\n        <button ion-button style="background-color: #394A51"  icon-start class="nav_btn" (click)="goToChart1()">\n          <ion-icon name=\'construct\' is-active="false"></ion-icon>\n          Tools\n        </button>\n      </ion-col>\n      <ion-col>\n          <button ion-button style="background-color: #7FA99B"  icon-start class="nav_btn">\n            <ion-icon name=\'construct\' is-active="false"></ion-icon>\n            Tools\n          </button>\n        </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n          <button ion-button style="background-color: #FBF2D5"  icon-start class="nav_btn">\n            <ion-icon name=\'construct\' is-active="false"></ion-icon>\n            Tools\n          </button>\n        </ion-col>\n        <ion-col>\n            <button ion-button style="background-color: #FDC57B"  icon-start class="nav_btn">\n              <ion-icon name=\'construct\' is-active="false"></ion-icon>\n              Tools\n            </button>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/navigation/navigation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], NavigationPage);
    return NavigationPage;
}());

//# sourceMappingURL=navigation.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date_picker_date_picker__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BillDetailsPage = /** @class */ (function () {
    function BillDetailsPage(navCtrl, navParams, view, loadingCtrl, alertCtrl, modalCtrl, storage, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.events = events;
    }
    BillDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BillDetailsPage');
    };
    /*
    It’s fired when entering a page, before it becomes the active one;
    */
    BillDetailsPage.prototype.ionViewWillEnter = function () {
        this.fetchInformation();
    };
    /*
    从后端提取账单信息，存储到数组中；
    由程序进入页面时自动触发；
    */
    BillDetailsPage.prototype.fetchInformation = function () {
        var _this = this;
        var data = this.get_post_data();
        var post_data = data;
        // 弹出式加载信息框；
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<div class="loader loader--snake"></div>',
            cssClass: 'loader'
        });
        loader.present();
        /* 请求数据 */
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/billDetails.php', { data: post_data })
            .then(function (res) {
            loader.dismiss(); // 数据成功传回后，取消加载框；
            if (res.data.message) {
                /* 如果返回的message不为空，说明后端返回的数据出错了，没有获取到账单信息。
                处理异常, 弹出信息提示框； */
                _this.alertCtrl.create({
                    title: 'Bill retrieve failed.',
                    subTitle: res.data.message,
                    buttons: ['ok']
                }).present();
                return;
            }
            // 绑定后端传回的数据到变量上;
            _this.billDetail_list = res.data['data'];
            /* 处理请求异常 */
        }).catch(function (Error) {
            /* 在app.module.ts 中有拦截器处理异常。 */
            console.log(Error);
            loader.dismiss();
        });
    };
    /*
    return: Associative Array: {is_day_selected, from_date, to_date, ...}
    Return an array containing data to be posted to api;
    */
    BillDetailsPage.prototype.get_post_data = function () {
        var email = localStorage.getItem('email');
        var is_day_selected = localStorage.getItem('is_day_selected');
        if (is_day_selected) {
            var post_data = {
                is_day_selected: true,
                from_date: localStorage.getItem('date_from'),
                to_date: localStorage.getItem('date_to'),
                email: email
            };
            /* clear storage */
            localStorage.removeItem('date_from');
            localStorage.removeItem('date_to');
            localStorage.removeItem('is_day_selected');
            return post_data;
        }
        else {
            var returnLast30;
            var month = this.getMonthPicked();
            if (month == '-1') {
                returnLast30 = true;
            }
            else {
                returnLast30 = false;
            }
            var post_data = {
                is_day_selected: false,
                returnLatest30: returnLast30,
                month: month,
                year: this.getYearPicked(),
                email: email
            };
            return post_data;
        }
    };
    /*
    点击关闭按键，退出账单明细页面；
    */
    BillDetailsPage.prototype.closeBillDetails = function () {
        // 清空localstorage中相对应的value，以便每一次进入页面时都显示当先月份的账单列表；
        localStorage.removeItem('datePicked');
        this.view.dismiss();
    };
    /*
    @param: list: [{name, amount, date, bill_id},{...}], 通过 fetchInformation() 绑定到html的array，再通过前端发送回来；
            index: （Integer)
    由页面中的列表滑动手势触发；
    删除界面中的选项，并且在数据库中执行删除操作；
    */
    BillDetailsPage.prototype.deleteItem = function (list, index) {
        var _this = this;
        console.log(list[index].name, list[index].amount, list[index].bill_id);
        var email = localStorage.getItem('email');
        /* 定义一个toast */
        var toast = this.toastCtrl.create({ message: 'Deleting...', position: 'bottom', cssClass: 'toast-container' });
        var ID = list[index].bill_id;
        list.splice(index, 1); //删除界面中的选项
        toast.present(); // 显示toast
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/deleteBill.php', { billID: ID, email: email }) //在数据库中删除；
            .then(function (res) {
            toast.dismiss(); // 关闭toast
            console.log(res.data.data);
            /* 如果返回的是data message，说明后端报错了。处理异常 */
            if (res.data.message) {
                _this.alertCtrl.create({
                    title: 'Deletion Failes.',
                    subTitle: res.data.message,
                    buttons: ['OK']
                }).present();
            }
        }).catch(function (error) {
            /* 在app.module.ts 中有拦截器处理异常。 */
            console.log("bill-details Page, deletion error");
            console.log(error);
            toast.dismiss();
        });
    };
    /*
    由页面中的日历图标触发，生成一个用来选择日期的页面；
    */
    BillDetailsPage.prototype.pickDate = function () {
        var page = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__date_picker_date_picker__["a" /* DatePickerPage */]);
        page.present();
    };
    /*
    void；
    每次用户第一次进入页面时，返回 -1，用来表示用户仍未选择自定义月份；
    如果用户进行了选择日期的操作，则返回相应的用户所选择的月份；
    return: (String), integer in String format;
    */
    BillDetailsPage.prototype.getMonthPicked = function () {
        var month = localStorage.getItem('monthPicked');
        // 如果起始的localstorage 中get到值，使用此值；
        if (month) {
            /*
            清空storage中与key相对应的value. 因为如果不清空，localstorage中仍会储存上一次选择日期时所设置的value值,
            下一次开启页面时会显示上一次选择的日期的账单。
            但理想的效果是每一次开启页面，都显示近期30天内的账单。其他月份列表需要用户自行选择。
            清空操作也可以在离开页面，也就是 closeBillDetails() 函数中操作；
            */
            localStorage.removeItem('monthPicked');
            return month;
        }
        // 如果没有get到值，说明是第一次进入页面，并且没有执行过选择日期的操作，那么返回-1。在后端处理的时候如果是-1，代表返回最近30天的记录；
        return '-1';
    };
    /*
    void;
    return: (string);
    返回在datePickerPage 用户所选择的year；
    */
    BillDetailsPage.prototype.getYearPicked = function () {
        var year = localStorage.getItem('yearPicked');
        localStorage.removeItem('yearPicked');
        return year;
    };
    BillDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bill-details',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/bill-details/bill-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <span class="closeBtn" (click)="closeBillDetails()">关闭</span>\n    <ion-title>账单</ion-title>\n    <ion-icon ios="ios-calendar" md="md-calendar" class="calendar" (click)="pickDate()"></ion-icon>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list class="list">\n      <ion-item-sliding *ngFor="let item of billDetail_list; let i = index; ">\n        <ion-item>\n          <span class="billTitle">{{item.name}}</span>\n          <span class="billAmount">{{item.amount}}</span>\n          <p><span class="billDate">{{item.date}}</span></p>\n        </ion-item>\n        <ion-item-options icon-start (ionSwipe)="deleteItem(billDetail_list, i)">\n          <button color="danger" ion-button expandable (click)="deleteItem(billDetail_list, i)">\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/bill-details/bill-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], BillDetailsPage);
    return BillDetailsPage;
}());

//# sourceMappingURL=bill-details.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatePickerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatePickerPage = /** @class */ (function () {
    function DatePickerPage(navCtrl, navParams, viewCtrl, storage, formBuilder, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.events = events;
        this.time_measure = 'month';
        /* 用来控制选择具体日期的form的显示 */
        this.hidden = false;
        /* 绑定form */
        this.date = this.formBuilder.group({
            // default date is chosen as the current month;
            datePick: [(new Date()).toISOString().substring(0, 10),],
            from: [(new Date()).toISOString().substring(0, 10),],
            to: [,]
        });
    }
    DatePickerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatePickerPage');
    };
    /*
    由页面上方关闭按键触发，销毁modal；
    */
    DatePickerPage.prototype.closePage = function () {
        this.viewCtrl.dismiss();
    };
    /*
    由页面上方完成键触发，保存日期数据到localstorage，供billDetails页面提取；
    */
    DatePickerPage.prototype.saveDate = function () {
        /* if time_measure = month, that means users are selecting to view bills in month */
        if (this.time_measure == 'month') {
            /* get date value from form */
            var tmp = this.date.value['datePick'];
            // 调用 MainAccountPage 中的 extractMonth(date) function; 使用Events自带的publish 和 subscribe;
            var month = this.events.publish("getMonth", tmp);
            console.log(month);
            var year = this.events.publish("getYear", tmp);
            // 将所选择的月份储存在storage中；
            localStorage.setItem('monthPicked', month[0]);
            localStorage.setItem("yearPicked", year[0]);
        }
        else {
            /* get from and to date value from form */
            var date_from_selected = this.date.value['from'];
            var date_to_selected = this.date.value['to'];
            console.log(date_from_selected, date_to_selected);
            /* save the two values in localstorage for billDetails page to fetch */
            localStorage.setItem('date_from', date_from_selected);
            localStorage.setItem('date_to', date_to_selected);
            localStorage.setItem('is_day_selected', 'true');
        }
        this.viewCtrl.dismiss();
    };
    /*
    */
    DatePickerPage.prototype.change_time_measure = function () {
        if (this.time_measure === 'month') {
            this.time_measure = 'day';
        }
        else {
            this.time_measure = 'month';
        }
        /* 显示或者隐藏form */
        this.hidden = !this.hidden;
    };
    DatePickerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-date-picker',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/date-picker/date-picker.html"*/'<ion-header>\n\n  <ion-navbar>\n    <span class="closeBtn" (click)="closePage()">关闭</span>\n    <ion-title>选择月份</ion-title>\n    <span class="saveBtn" (click)="saveDate()" type="submit">完成</span>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="toggle toggle--text">\n    <input type="checkbox" id="toggle--text" class="toggle--checkbox">\n    <label class="toggle--btn" for="toggle--text" data-label-on="月"  data-label-off="日" (click)="change_time_measure()"></label>\n  </div>\n\n  <form [formGroup]="date" (ngSubmit)="saveDate()" [hidden]=\'hidden\'>\n    <ion-item class="input-list"> \n      <ion-label>月份</ion-label>\n      <ion-datetime displayFormat="YYYY年MM月" pickerFormat="YYYY MM" formControlName="datePick"></ion-datetime>\n    </ion-item>\n  </form>\n\n  <form  [hidden]=\'!hidden\' [formGroup]=\'date\' (ngSubmit)=\'saveDate()\'>\n    <ion-item class="input-list"> \n      <ion-label>From</ion-label>\n      <ion-datetime displayFormat="YYYY年MM月DD日" pickerFormat="YYYY MM DD" formControlName=\'from\'></ion-datetime>\n    </ion-item>\n    <ion-item class="input-list"> \n      <ion-label>To</ion-label>\n      <ion-datetime displayFormat="YYYY年MM月DD日" pickerFormat="YYYY MM DD" formControlName=\'to\'></ion-datetime>\n    </ion-item>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/date-picker/date-picker.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], DatePickerPage);
    return DatePickerPage;
}());

//# sourceMappingURL=date-picker.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_account_main_account__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.year = 1300; /* ngModel */
        this.fetch_data();
    }
    /* ============================================================================
    triggered by ion-range using (ionChange);
    select year in the range, refresh the page to display statistics based on selected year;
    ============================================================================ */
    StatisticsPage.prototype.select_year = function () {
        var _this = this;
        console.log(this.year);
        var email = localStorage.getItem('email');
        /* bound to ngModel [year] */
        this.expense_year = this.year;
        var static_array;
        /* request api to process data */
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/statistics.php', { email: email, selected_year: this.year })
            .then(function (res) {
            if (!res.data.message) {
                static_array = res.data['data'];
                /* remove the unwanted items in the array */
                delete static_array['min_year'];
                delete static_array['max_year'];
                /* transform integers to percentage in the array */
                var percentage_array = _this.computePercentage(static_array);
                /* display chart */
                _this.display_chart(percentage_array);
            }
            else {
                _this.alertCtrl.create({
                    title: res.data.message,
                    message: 'Press ok and dismiss',
                    buttons: [
                        {
                            text: 'OK',
                        }
                    ]
                }).present();
            }
        }).catch(function (Error) {
            /* 另外，在app.module.ts 中有拦截器处理异常。 */
            console.log(Error);
        });
    };
    StatisticsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatisticsPage');
    };
    /* =======================================================================
    pop the current page in the stack;
    ======================================================================= */
    StatisticsPage.prototype.ionViewWillLeave = function () {
        console.log(this.navCtrl.getViews());
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_account_main_account__["a" /* MainAccountPage */]);
    };
    /* ==============================================================================
    fetch data from database API;
    DATA format fetched is stored in static_array = {{super_market: "50.00", other: "992.40", …}};
    Finally calls function to display chart;
    ==============================================================================*/
    StatisticsPage.prototype.fetch_data = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        /* use current year to first retrieve data */
        this.year = (new Date()).getFullYear();
        /* set html data [expense_year] */
        this.expense_year = this.year;
        var static_array;
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/statistics.php', { email: email, selected_year: this.year })
            .then(function (res) {
            /* 如果当前年份有数据返回，显示图表 */
            if (!res.data.message) {
                /* bind responed data to var */
                static_array = res.data['data'];
                /* set ion-range end points */
                _this.min_year = static_array['min_year'];
                _this.max_year = static_array['max_year'];
                /* remove the unwanted items in the array */
                delete static_array['min_year'];
                delete static_array['max_year'];
                /* transform the data format in the array to percentage */
                var percentage_array = _this.computePercentage(static_array);
                /* call function to render the chart */
                _this.display_chart(percentage_array);
            }
            else {
                _this.alertCtrl.create({
                    title: res.data.message,
                    message: 'Press ok and dismiss',
                    buttons: [
                        {
                            text: 'OK',
                        }
                    ]
                }).present();
            }
        }).catch(function (Error) {
            /* 另外，在app.module.ts 中有拦截器处理异常。 */
            console.log(Error);
        });
    };
    /* ==============================================================================
    @param: (Array): {rent: "7887.28", super_market: "50.00", take_out: "57.34", clothes: "0",....}
    return: array: {super_market: 2, take_out: 2, clothes: 0, transportation: 0, other: 43, …}
    ==============================================================================*/
    StatisticsPage.prototype.computePercentage = function (array) {
        var total = 0;
        var result_array = [];
        for (var key in array) {
            total += Number(array[key]);
        }
        for (var index in array) {
            if (array[index] !== '0') {
                result_array.push({ name: index, y: Math.round(Number(array[index]) / total * 100) });
            }
        }
        return result_array;
    };
    /* ==============================================================================
    @param: (Array): {super_market: 2, take_out: 2, clothes: 0, transportation: 0, other: 43, …}
  
    utilizing Highchart.js to render the pie chart;
    ==============================================================================*/
    StatisticsPage.prototype.display_chart = function (array) {
        __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.chart('pie_chart', {
            chart: {
                plotBackgroundColor: '#eeecdf',
                plotBorderWidth: '100%',
                plotBorderColor: '#eeecdf',
                plotShadow: false,
                type: 'pie',
                background: '#eeecdf'
            },
            title: {
                text: null,
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (__WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.theme && __WEBPACK_IMPORTED_MODULE_2_highcharts___default.a.theme.contrastTextColor) || 'black',
                        }
                    }
                }
            },
            series: [{
                    name: 'portion',
                    colorByPoint: true,
                    data: array
                }]
        });
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-statistics',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/statistics/statistics.html"*/'\n<ion-header>\n  <!-- <ion-navbar>\n      <span class="closeBtn" (click)="closePage()">关闭</span>\n    <ion-title>statistics</ion-title>\n  </ion-navbar> -->\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="heading_frame">\n    <span>Expense Details, {{expense_year}}</span>\n  </div>\n  <!-- pie_chart container -->\n  <div id="pie_chart" class="pie_chart"></div>\n  <!-- line_chart container -->\n  <div  id="line_chart" [hidden]=\'hidden\'></div>\n  <ion-item>\n    <ion-range min=\'{{min_year}}\' max=\'{{max_year}}\' step="1" snaps="true" [(ngModel)]="year" color="danger" (ionChange)=\'select_year()\'>\n      <ion-label range-left>{{min_year}}</ion-label>\n      <ion-label range-right>{{max_year}}</ion-label>\n    </ion-range>\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/auth-code/auth-code.module": [
		320,
		11
	],
	"../pages/bill-details/bill-details.module": [
		321,
		10
	],
	"../pages/chart1/chart1.module": [
		322,
		9
	],
	"../pages/date-picker/date-picker.module": [
		323,
		8
	],
	"../pages/information/information.module": [
		324,
		7
	],
	"../pages/login/login.module": [
		325,
		6
	],
	"../pages/main-account/main-account.module": [
		326,
		5
	],
	"../pages/navigation/navigation.module": [
		327,
		4
	],
	"../pages/register/register.module": [
		328,
		3
	],
	"../pages/setting/setting.module": [
		329,
		2
	],
	"../pages/statistics/statistics.module": [
		330,
		1
	],
	"../pages/user-auth/user-auth.module": [
		331,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 174;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.selectedItem = navParams.get('item');
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [{
                title: 'Eat dinner',
                note: 'With Jane',
                icon: 'beer'
            }, {
                title: 'Play football',
                note: 'At 4 PM',
                icon: 'football'
            }, {
                title: 'Play basketball',
                note: 'In School',
                icon: 'basketball'
            }, {
                title: 'Travel',
                note: 'Next Sunday',
                icon: 'boat'
            }, {
                title: 'Write a letter',
                note: 'To pen pal',
                icon: 'paper-plane'
            }];
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Todo List</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-list>\n    <button ion-item *ngFor="let item of items">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list> -->\n  <div class="container">\n\n    <span>\n    OPEN\n  </span>\n  <span>\n    Come back soon\n  </span>\n  <span>\n    PBR<br>in cans\n  </span>\n  <span>\n    REAL LIVE<br>Hot wings\n  </span>\n  <span>\n    <small>GARDEN PARK</small><br>MOTEL\n  </span>\n  <span>\n     Restrooms\n    <br><small>Yes&mdash;they are bad</small>\n  </span>\n  <span>\n    FREE RADIOS\n  </span>\n  <span class="test">\n     Start today?\n  </span>\n  <span>\n    Karaoke Inside\n  </span>\n    \n    \n  \n  \n  \n  \n  \n  \n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Chart1Page = /** @class */ (function () {
    function Chart1Page(navCtrl, navParams, app, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.view = view;
        this.fetchData();
    }
    Chart1Page.prototype.fetchData = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/countryInfo.php', { email: email })
            .then(function (res) {
            _this.country_data = res.data['data'];
            _this.computePercentage(_this.country_data);
            console.log(_this.country_data);
            _this.display(_this.country_data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    Chart1Page.prototype.computePercentage = function (data) {
        var total = 0;
        for (var key in data) {
            total += Number(data[key]);
        }
        for (var key in data) {
            data[key] = Math.round(Number(data[key]) / total * 100);
        }
        return data;
    };
    Chart1Page.prototype.goBack = function () {
        //dismiss the modal using ViewController;
        this.view.dismiss();
    };
    Chart1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Chart1Page');
    };
    Chart1Page.prototype.display = function (country_data) {
        __WEBPACK_IMPORTED_MODULE_3_highcharts___default.a.chart('container', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: '2018 Country donation history'
            },
            tooltip: {
                headerFormat: '{series.name}:',
                pointFormat: '{point.name}: {point.percentage:.1f}%'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}: {point.percentage:.1f} %',
                    }
                }
            },
            series: [{
                    type: 'pie',
                    name: 'donation percentage',
                    data: [
                        ['Haiti', country_data['Haiti']],
                        {
                            name: 'South Sudan',
                            y: country_data['South Sudan'],
                            sliced: true,
                            selected: true
                        },
                        ['Niger', country_data['Niger']],
                        ['Ethiopia', country_data['Ethiopia']],
                        ['Tanzania', country_data['Tanzania']]
                    ]
                }]
        });
    };
    Chart1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chart1',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/chart1/chart1.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>chart1</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="container"></div>\n  <div class="back">\n      <button ion-button color="light" icon-start (click)="goBack()">\n          <ion-icon name=\'arrow-back\'></ion-icon>\n          Back\n        </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/chart1/chart1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]])
    ], Chart1Page);
    return Chart1Page;
}());

//# sourceMappingURL=chart1.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(242);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_information_information__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_navigation_navigation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chart1_chart1__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_main_account_main_account__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bill_details_bill_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_date_picker_date_picker__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_statistics_statistics__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_auth_user_auth__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_auth_code_auth_code__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_sms__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ion_multi_picker__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ion_multi_picker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























/* =================================================================================================
            plugin: <ion-multi-picker>
            NPM: npm install ion-multi-picker --save
            source: https://github.com/raychenfj/ion-multi-picker
================================================================================================= */

var AppModule = /** @class */ (function () {
    function AppModule(events, alertCtrl) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        /* =================================================================
        连接后端API
         ================================================================= */
        /* if running on localhost server, uncomment the following line */
        //axios.defaults.baseURL = 'http://localhost/api/api/';
        /* if running on server, uncomment the following line */
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.baseURL = 'http://jimsbill.ca/api/';
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.defaults.timeout = 15000; // 设置axios的最长默认请求时间，如果超出15秒，在页面中catch error，然后处理异常；
        // 添加请求拦截器
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            console.log("before requesting", config);
            return config;
        }, function (error) {
            // 对请求错误做些什么
            console.log('error when requesting.');
            _this.handle_request_error();
            return Promise.reject(error);
        });
        // 添加响应拦截器
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            console.log('respond data', response);
            return response;
        }, function (error) {
            // 对响应错误做点什么
            console.log('error when responding');
            console.log(error);
            _this.handle_respond_error();
            return Promise.reject(error);
        });
    }
    /*
    如果 axios 网络回应出现问题，则调用此函数；
    在 页面的 axios 请求中一定要 catch error，否则会引起程序崩溃；
    */
    AppModule.prototype.handle_respond_error = function () {
        this.alertCtrl.create({
            title: 'Network/Data Respond Error',
            message: 'Lost of network connection OR error during data responding. Retry later.',
            buttons: [{
                    text: 'OK',
                    handler: function () { }
                }]
        }).present();
    };
    /*
    如果 axios 网络请求出现问题，则调用此函数；
    */
    AppModule.prototype.handle_request_error = function () {
        this.alertCtrl.create({
            title: 'Requesting Error',
            message: 'Data Requesting Error. Please retry later.',
            buttons: [{
                    text: 'OK',
                    handler: function () { }
                }]
        }).present();
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_navigation_navigation__["a" /* NavigationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chart1_chart1__["a" /* Chart1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_main_account_main_account__["a" /* MainAccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bill_details_bill_details__["a" /* BillDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_date_picker_date_picker__["a" /* DatePickerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_auth_user_auth__["a" /* UserAuthPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_auth_code_auth_code__["a" /* AuthCodePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { backButtonText: '返回' }, {
                    links: [
                        { loadChildren: '../pages/auth-code/auth-code.module#AuthCodePageModule', name: 'AuthCodePage', segment: 'auth-code', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bill-details/bill-details.module#BillDetailsPageModule', name: 'BillDetailsPage', segment: 'bill-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chart1/chart1.module#Chart1PageModule', name: 'Chart1Page', segment: 'chart1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/date-picker/date-picker.module#DatePickerPageModule', name: 'DatePickerPage', segment: 'date-picker', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-account/main-account.module#MainAccountPageModule', name: 'MainAccountPage', segment: 'main-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/navigation/navigation.module#NavigationPageModule', name: 'NavigationPage', segment: 'navigation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statistics/statistics.module#StatisticsPageModule', name: 'StatisticsPage', segment: 'statistics', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-auth/user-auth.module#UserAuthPageModule', name: 'UserAuthPage', segment: 'user-auth', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_23_ion_multi_picker__["MultiPickerModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["a" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_setting_setting__["a" /* SettingPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_navigation_navigation__["a" /* NavigationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chart1_chart1__["a" /* Chart1Page */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_main_account_main_account__["a" /* MainAccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bill_details_bill_details__["a" /* BillDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_date_picker_date_picker__["a" /* DatePickerPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_statistics_statistics__["a" /* StatisticsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_user_auth_user_auth__["a" /* UserAuthPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_auth_code_auth_code__["a" /* AuthCodePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_sms__["a" /* SMS */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["IonicErrorHandler"] },
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_setting_setting__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //this.initializeApp();
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = localStorage.getItem('isLogin') ? __WEBPACK_IMPORTED_MODULE_5__pages_setting_setting__["a" /* SettingPage */] : __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'Todo List', component: ListPage },
        //   { title: 'Gallery', component: GalleryPage },
        //   { title: 'Information', component: InformationPage },
        //   { title: 'Setting' , component: SettingPage}
        // ];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<!-- 禁止所有页面的滑动手势 -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__setting_setting__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.email = '';
        this.password = '';
    }
    //disable swipe gesture in the page;
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.swipeEnable(false);
    };
    //enable swipe gesture when leave this page;
    //otherwise, other pages' swipe gesture will be disable too;
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /* 由前端界面按键触发，跳转到注册页面 */
    LoginPage.prototype.toSignIn = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    /* 由前端按键触发，执行登陆验证； */
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                // localStorage.setItem('isLogin', 'true');
                //     localStorage.setItem('email', 'jliu187@uottawa.ca');
                //     this.navCtrl.setRoot(SettingPage);
                /* 监控 input field */
                if (this.email === '' || this.password === '') {
                    this.alertCtrl.create({
                        buttons: ['ok'],
                        title: 'Please fill all fieds'
                    }).present();
                    return [2 /*return*/];
                }
                loader = this.loadingCtrl.create({
                    spinner: 'hide',
                    content: '<div class="loader loader--snake"></div>',
                    cssClass: 'loader'
                });
                loader.present();
                /* post到后端API，进行登录操作。登录成功后跳转到主界面。 */
                __WEBPACK_IMPORTED_MODULE_5_axios___default.a.post('/login.php', { email: this.email, password: this.password })
                    .then(function (res) {
                    loader.dismiss();
                    /* 如果返回的数据错误，弹出警示窗口，处理异常 */
                    if (!res.data.current_user) {
                        var message = res.data.message;
                        _this.alertCtrl.create({
                            buttons: ['ok'],
                            title: message
                        }).present();
                        return;
                    }
                    //direct to Setting Page(main page) after login;
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__setting_setting__["a" /* SettingPage */]);
                    localStorage.setItem('isLogin', 'true');
                    localStorage.setItem('email', _this.email);
                }).catch(function (error) {
                    loader.dismiss();
                    /* 另外，在app.module.ts 中有拦截器处理异常。 */
                    console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/login/login.html"*/'<ion-content padding class="transparent-header">\n  \n  \n  <div padding class="content">\n    <ion-row>\n      <ion-col>\n        <!-- <img class="logo" src="assets/imgs/logo.gif"/> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list inset class="no-border">\n          <ion-item class="email">\n            <!-- <ion-label>Username</ion-label> -->\n            <ion-input type="email" [(ngModel)]="email" placeholder="Email"></ion-input>\n          </ion-item>\n          <ion-item>\n            <!-- <ion-label>Password</ion-label> -->\n            <ion-input type="password" [(ngModel)]="password" placeholder="password"></ion-input> \n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button class="login-button" (click)="login()">Login</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div (click)="toSignIn()">\n          <span class="register">Or create a new account.</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_index__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_information__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_account_main_account__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1root = __WEBPACK_IMPORTED_MODULE_5__main_account_main_account__["a" /* MainAccountPage */];
        this.tab2root = __WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */];
        this.tab3root = __WEBPACK_IMPORTED_MODULE_4__navigation_navigation__["a" /* NavigationPage */];
        this.tab4root = __WEBPACK_IMPORTED_MODULE_2__information_information__["a" /* InformationPage */];
        this.openMenu = false; //判定绿色菜单页面的显示；
    }
    SettingPage.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    SettingPage.prototype.goToAccount = function () {
        alert('Account clicked.');
        this.togglePopupMenu();
    };
    SettingPage.prototype.goToHome = function () {
        alert('Home clicked.');
        this.togglePopupMenu();
    };
    SettingPage.prototype.goToCups = function () {
        alert('Cups clicked.');
        this.togglePopupMenu();
    };
    SettingPage.prototype.goToLeaderboard = function () {
        alert('Leaderboard clicked.');
        this.togglePopupMenu();
    };
    SettingPage.prototype.goToHelp = function () {
        alert('Help clicked.');
        this.togglePopupMenu();
    };
    SettingPage.prototype.goToShop = function () {
        alert('Shop clicked.');
        this.togglePopupMenu();
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setting',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/setting/setting.html"*/'\n<ion-tabs selectedIndex="0" id="tabs">  <!--index为0的tab button指向的初始页面-->\n  <ion-tab [root]="tab1root" tabTitle="账户" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2root" tabTitle="Live Activity" tabIcon="home" ></ion-tab>\n  <!-- tab 中心键； （按键触发事件用 ionSelect） -->\n  <ion-tab tabTitle="" tabIcon="#" (ionSelect)="togglePopupMenu()"></ion-tab>\n  <ion-tab [root]="tab3root" tabTitle="图表" tabIcon="person" ></ion-tab>\n  <ion-tab [root]="tab4root" tabTitle="我" tabIcon="person" ></ion-tab>\n</ion-tabs>\n\n<!-- 以下是按键之后弹出菜单部分 -->\n<div class="popup-menu">\n    <!-- overlay： 弹出菜单之后背景部分的暗化。作用是点击背景部分也可以退出弹出菜单。 -->\n		<div class="popup-menu-overlay" [ngClass]="{\'in\': openMenu}" (click)="togglePopupMenu()"></div>\n		<!--  <div class="popup-menu-toggle" (click)="togglePopupMenu()" [ngClass]="{\'out\': openMenu}"></div> -->\n		<div class="popup-menu-panel" [ngClass]="{\'in\': openMenu}">\n			<div class="popup-menu-item" (click)="goToHome()">\n				<ion-icon name="home"></ion-icon>\n				<ion-badge>25</ion-badge>\n				<span>HOME</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToCups()">\n				<ion-icon name="trophy"></ion-icon>\n				<span>CUPS</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToLeaderboard()">\n				<ion-icon name="podium"></ion-icon>\n				<ion-badge>10</ion-badge>\n				<span>LEADERBOARD</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToHelp()">\n				<ion-icon name="help"></ion-icon>\n				<span>HELP</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToAccount()">\n				<ion-icon name="person"></ion-icon>\n				<ion-badge>5</ion-badge>\n				<span>ACCOUNT</span>\n			</div>\n			<div class="popup-menu-item" (click)="goToShop()">\n				<ion-icon name="cart"></ion-icon>\n				<ion-badge>25</ion-badge>\n				<span>SHOP</span>\n			</div>\n		</div>\n	</div>\n\n\n\n\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/setting/setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bill_details_bill_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__statistics_statistics__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainAccountPage = /** @class */ (function () {
    function MainAccountPage(navCtrl, formBuilder, alertCtrl, loadingCtrl, modalCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.display = false; //判定绿色菜单页面的显示；
        /* 前端绑定数据声明 */
        this.monthly_total = '';
        this.monthly_left = '';
        this.total = '';
        this.number_of_expense = '';
        /* 自定义picker */
        this.simpleColumns = [
            {
                name: 'col1',
                options: [
                    { text: 'daily expense', value: 'daily_expense' },
                    { text: 'fixed expense', value: 'fixed_expense' },
                    { text: 'other', value: 'other_expense' }
                ]
            },
            {
                name: 'col2',
                options: [
                    { text: 'super market', value: 'super_market', parentVal: 'daily_expense' },
                    { text: 'commodity', value: 'commodity', parentVal: 'daily_expense' },
                    { text: 'restaurant', value: 'restaurant', parentVal: 'daily_expense' },
                    { text: 'take out', value: 'take_out', parentVal: 'daily_expense' },
                    { text: 'cigarette', value: 'cigarette', parentVal: 'daily_expense' },
                    { text: 'clothes', value: 'clothes', parentVal: 'daily_expense' },
                    { text: 'transportation', value: 'transportation', parentVal: 'daily_expense' },
                    { text: 'other', value: 'other', parentVal: 'daily_expense' },
                    { text: 'rent', value: 'rent', parentVal: 'fixed_expense' },
                    { text: 'fees', value: 'fees', parentVal: 'fixed_expense' },
                    { text: 'insurance', value: 'insurance', parentVal: 'fixed_expense' },
                    { text: 'gas', value: 'gas', parentVal: 'fixed_expense' },
                    { text: 'other', value: 'other', parentVal: 'fixed_expense' },
                    { text: 'medical', value: 'medical', parentVal: 'other_expense' }
                ]
            }
        ];
        /* 使用Events中的subscribe，使其他page 可以调用本class中的 extractMonth() 函数； */
        events.subscribe("getMonth", function (tmp) {
            return _this.extractMonth(tmp);
        });
        events.subscribe("getYear", function (tmp) {
            return _this.extractYear(tmp);
        });
        /* data_list 为html中的form封装之后的object, 作为所有form input 的容器 */
        this.data_list = this.formBuilder.group({
            //用regular expression来监听金额输入是否有效；包含[0-9]的任意数字，{1，}从一位开始的任意长度；
            val: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern('[0-9]{1,}[.]{0,1}[0-9]{0,}')])],
            date: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            name: ['',],
            type: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    MainAccountPage.prototype.ionViewDidLoad = function () {
        console.log('main-account page');
    };
    /* ===========================================================================
    It’s fired when entering a page, before it becomes the active one;
    =========================================================================== */
    MainAccountPage.prototype.ionViewWillEnter = function () {
        /* 加载页面时，设置当前日期，绑定到前端 ticket 图标中； */
        this.current_date = (new Date()).getDate();
        this.fetchInformation();
    };
    /* ===========================================================================
    主页下拉刷新操作；
    由 ion-refresher 触发；
    =========================================================================== */
    MainAccountPage.prototype.doRefresh = function (event) {
        /* customized loader style; scss located in app.scss; */
        var loader = this.loadingCtrl.create({
            spinner: 'hide',
            content: '<div class="loader loader--snake"></div>',
            cssClass: 'loader'
        });
        loader.present();
        this.fetchInformation();
        event.complete(); //关闭下拉刷新；
        loader.dismiss(); // 关闭loader；
    };
    /* ===========================================================================
    Fetch data from database;
    =========================================================================== */
    MainAccountPage.prototype.fetchInformation = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        var month = (new Date()).getMonth() + 1;
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/bill_summary.php', { email: email, selected_month: month })
            .then(function (res) {
            _this.monthly_total = res.data['data']['monthly_total'];
            _this.monthly_left = res.data['data']['monthly_left'];
            _this.total = res.data['data']['totalSum'];
            _this.number_of_expense = res.data['data']['numberofExpense'];
        }).catch(function (Error) {
            /* 另外，在app.module.ts 中有拦截器处理异常。 */
            console.log(Error);
        });
    };
    /* ===========================================================================
    清空除了日期之外的所有input field；
    当点击圆形按键时，更改display的boolean值，用来显示或者收起弹出界面；
    =========================================================================== */
    MainAccountPage.prototype.toggle = function () {
        /*
        由于触发的界面不是一个view，所以页面只在程序启动时初始化一次；
        所以为了能每次打开弹出页面时，日期都是及时更新的。每次打开时，都要重新设置最新的日期；
        */
        this.data_list['controls']['date'].setValue((new Date().toISOString()));
        this.data_list['controls']['name'].reset(); //退出界面之后清空必要的输入框；
        this.data_list['controls']['val'].reset();
        this.data_list['controls']['type'].reset();
        return this.display = !this.display;
    };
    /* ===========================================================================
    点击button之后的提交动作；
    post到后端，添加账单;
    =========================================================================== */
    MainAccountPage.prototype.addBill = function () {
        var _this = this;
        /* get expense array from input field */
        var expense_array = this.getPickerValue(this.data_list.value['type']);
        var email = localStorage.getItem('email');
        /* get type from the input field */
        var type = expense_array[0];
        var category = expense_array[1];
        var name = this.data_list.value['name'];
        var amount = this.data_list.value['val'];
        var month = this.extractMonth(this.data_list.value['date']);
        var year = (new Date()).getFullYear();
        var date = this.data_list.value['date'].toString().substring(0, 10);
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('addBill.php', { email: email, info_type: type, info_cat: category, info_name: name, info_amount: amount, info_month: month, info_year: year,
            info_date: date })
            .then(function (res) {
            /* 返回数据异常，处理异常 */
            if (res.data.message) {
                _this.alertCtrl.create({
                    title: 'Information Update failed',
                    subTitle: res.data.message,
                    buttons: ['ok']
                }).present();
                return;
            }
            _this.alertCtrl.create({
                title: 'Bill Saved',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.toggle(); //after info successfully upadted, close the meun;
                        }
                    }
                ]
            }).present();
        }).catch(function (error) {
            /* 另外，在app.module.ts 中有拦截器处理异常。 */
            console.log(error);
        });
    };
    /* ===========================================================================
    helper function to extract month from ionic datetime input field.
    Since type of data_list.value['date'] is String, we need to parse the string and get month within it;
    =========================================================================== */
    MainAccountPage.prototype.extractMonth = function (date) {
        var month = date.substring(5, 7);
        if (month.substring(0, 1) === '0')
            return month.substring(1, 2);
        return month.substring(0, 2);
    };
    /* ===========================================================================
    helpler function to extract year from the given input datetime string;
    @param: date: formate 2018-05-27T13:47
    return: (String)
    =========================================================================== */
    MainAccountPage.prototype.extractYear = function (date) {
        var year = date.substring(0, 4);
        return year;
    };
    /* ===========================================================================
    @param: string(String)
    returns: the according title of the expense type name;
    i.e.: rent'id is 2, the title 'fixed_expense' should be returned;
    =========================================================================== */
    MainAccountPage.prototype.getPickerValue = function (string) {
        var array = string.split(', ');
        return array;
    };
    /* ===========================================================================
    进入BillDetails 页面；
    =========================================================================== */
    MainAccountPage.prototype.showBillDetails = function () {
        var page = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__bill_details_bill_details__["a" /* BillDetailsPage */]);
        page.present();
    };
    MainAccountPage.prototype.statistics_page = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__statistics_statistics__["a" /* StatisticsPage */]);
        console.log(this.navCtrl.getViews());
    };
    MainAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main-account',template:/*ion-inline-start:"/Users/junhanliu/lab02/ionic/src/pages/main-account/main-account.html"*/'<ion-header [ngClass]="{\'in\': display}" class="header">\n  <ion-navbar class="navbar">\n      <ion-title>\n          Account\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="container">\n\n  <!-- 下拉页面刷新 -->\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="下拉刷新"\n      refreshingSpinner="circles"\n      refreshingText="正在刷新...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <!-- 页面数据面板（页面上半部）日历样式 -->\n  <div class="card-profile">\n    <div class="holes"></div>\n    <div class="flip"></div>\n    <!-- 圆形中心键上部数据面板 -->\n    <div class="card-profile_visual">\n\n      <ion-grid>\n        <ion-row class="summary" [ngStyle]="{\'border-bottom\': \'1px solid white\'}">\n          <ion-col col-12 class="stats">\n              <span [ngStyle]="{\'padding-bottom\':\'5vh\'}"> 本月支出（元）</span>\n              <p class="amount">￥{{monthly_total}}</p>\n          </ion-col>\n          <ion-col>\n              <!-- ticket icon -->\n              <div class="ticket-container">\n                <div class="triangle"><div class="dot"></div></div>\n                <div class="ticket">\n                  <div class="square">{{current_date}}</div>\n                  <div class="flips"></div>\n                </div>\n              </div>\n              <!-- ticket icon end -->\n\n              <!-- 日历图标，取消注释查看效果 -->\n              <!-- <div class="count">\n                {{current_date}}\n                <div class="flip"></div>\n                <div class="line"></div>\n              </div> -->\n          </ion-col>\n        </ion-row>\n        \n        <ion-row class="summary2">\n          <ion-col>\n              <span class="title"> 本月剩余（元）</span>\n          </ion-col>\n          <ion-col>\n              <span class="amount2">￥{{monthly_left}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- 圆形中心键上部数据面板 结束 -->\n\n    <!-- 圆形中心键 -->\n    <div class="card-profile_central-button"><a href="#" (click)="toggle()"></a></div>\n\n    <!-- 圆形中心键下半部数据面板 -->\n    <div class="card-profile_user-stats">\n      <div class="stats-holder">\n        <div class="user-stats">\n          <strong>总支出（元）</strong>\n          <span>{{total}}</span>\n        </div>\n        <div class="user-stats">\n          <strong>（笔）</strong>\n          <span>{{number_of_expense}}</span>\n        </div>\n      </div>\n    </div> \n    <!-- 圆形中心键下半部数据面板 结束 --> \n    \n  </div>\n  <!-- 页面数据面板（页面上半部） 结束 -->\n  \n  <div class="divider"></div>\n\n  <!-- 九宫格面板 -->\n  <div class="control_panel">\n\n      <div class="control-row">\n        <div class="control-item">\n            <p><ion-icon ios="ios-paper" md="md-paper" class="panel_icon" (click)="showBillDetails()"></ion-icon></p>\n          <span>账单明细</span>\n        </div>\n        <div class="control-item">\n            <p><ion-icon name="md-analytics" md="md-analytics" class="panel_icon"></ion-icon></p>\n          <span>年视图</span>\n        </div>\n        <div class="control-item">\n            <p><ion-icon ios="ios-clipboard" md="md-clipboard" class="panel_icon" (click)="statistics_page()"></ion-icon></p>\n          <span>统计开销</span>\n        </div>\n      </div>\n    \n      <div class="control-row">\n        <div class="control-item">\n            <p><ion-icon ios="ios-list-box" md="md-list-box" class="panel_icon"></ion-icon></p>\n          <span>时间线</span>\n        </div>\n        <div class="control-item">\n            <p><ion-icon ios="ios-calendar" md="md-calendar" class="panel_icon"></ion-icon></p>\n          <span>统计开销</span>\n        </div>\n        <div class="control-item">\n            <p><ion-icon ios="ios-podium" md="md-podium" class="panel_icon"></ion-icon></p>\n          <span>月视图</span>\n        </div>\n        \n      </div>\n\n      <div class="control-row">\n        <div class="control-item">\n            <p><ion-icon ios="ios-cash-outline" md="md-albums" class="panel_icon"></ion-icon></p>\n          <span>年开销</span>\n        </div>\n        <div class="control-item">\n            <p><ion-icon ios="ios-albums" md="md-albums" class="panel_icon"></ion-icon></p>\n          <span>年开销</span>\n        </div>\n        <div class="control-item" style="padding-bottom: 1em">\n            <p><ion-icon ios="ios-albums" md="md-albums" class="panel_icon"></ion-icon></p>\n          <span>年开销</span>\n        </div>\n      </div>\n      \n  </div>\n  <!-- 九宫格面板 结束 -->\n\n\n  \n</ion-content>\n\n<!-- 点击圆形键之后弹出菜单部分 -->\n\n<!-- 由于是弹出的页面，不是一个独立page。所以在开启软键盘时，有一些元素会被键盘顶出到键盘上方位置。\n      如果是独立page，可以使用 .scroll-content 解决。但是在此处，作为一个弹出页面；\n      需要使用 cordova plugin add ionic-plugin-keyboard 来解决. -->\n\n<div class="popup-menu-2">\n  <!-- overlay： 弹出菜单之后背景部分的暗化。作用是点击背景部分也可以退出弹出菜单。 -->\n  <div class="popup-menu-overlay-2" [ngClass]="{\'in\': display}" (click)="toggle()"></div>\n  <div class="popup-menu-panel-2" [ngClass]="{\'in\': display}">\n\n    <form [formGroup]="data_list"  (ngSubmit)="logForm()">\n      <div class="formTitle">\n        <ion-icon ios="ios-clipboard" md="md-clipboard" class="panel_icon"></ion-icon>\n        <ion-label>添加账单</ion-label>\n      </div>\n      \n      <div class="list-item">\n          <ion-item class="input-list"> \n            <ion-label>日期</ion-label>\n            <ion-datetime displayFormat="MM月DD日" pickerFormat="MM DD" formControlName="date"></ion-datetime>\n          </ion-item>\n      </div>\n\n      <div class="list-item">\n        <ion-item class="input-list">\n          <ion-label>类型</ion-label>\n          <!-- =================================================================================================\n            plugin: <ion-multi-picker> \n            imported in app.module.ts;\n            source: https://github.com/raychenfj/ion-multi-picker\n            NPM: npm install ion-multi-picker --save\n           ================================================================================================= -->\n          <ion-multi-picker id="simple" doneText=\'save\' separator=\', \'\n           item-content [multiPickerColumns]="simpleColumns" formControlName="type"></ion-multi-picker>\n        </ion-item>\n    </div>\n      \n      <div class="list-item"> \n          <ion-item class="input-list">\n              <ion-label>名称</ion-label>\n              <ion-input type="text" formControlName="name"></ion-input>\n          </ion-item>\n      </div>\n      \n      <div class="list-item">\n          <ion-item class="input-list">\n              <ion-label>金额</ion-label>\n              <ion-input type="text" formControlName="val"></ion-input>\n          </ion-item>\n      </div>\n      <!-- 空白处，点击可以退出弹出页面 -->\n      <div class="white-space" (click)=\'toggle()\'></div>\n      \n    </form>\n\n    <div class="button">\n          <!-- data_list.valid 监控表单是否满足条件。如果满足，将按键开启； -->\n          <button ion-button type="submit" (click)="addBill()" [disabled]="!data_list.valid">保存</button>\n    </div>\n\n  </div>\n</div>\n\n<!-- 点击圆形键之后弹出菜单部分 结束 -->\n\n\n\n<!-- 社交网络样式面板  -->\n<!-- <div class="control_panel1">\n  <div class="socialAnimationWrapper">\n      <ul class="socialAnimation">\n          <li class="person"><img src="assets/imgs/search.png" alt=""/></li>\n          <li class="facebook" (click)="showBillDetails()">\n              <img class="containerImg" src="assets/imgs/bill.png">\n              <div class="connector">\n                  <span class="one"></span>\n                  <span class="two"></span>\n              </div>\n              <span class="label">账单明细</span>\n          </li>\n          <li class="googlePlus">\n              <img class="containerImg" src="assets/imgs/data.png">\n              <div class="connector">\n                  <span class="one"></span>\n                  <span class="two"></span>\n              </div>\n              <span class="label">数据中心</span>\n          </li>\n          <li class="twitter">\n              <img class="containerImg" src="assets/imgs/bag.png">\n              <div class="connector">\n                  <span class="one"></span>\n                  <span class="two"></span>\n              </div>\n          </li>\n          <li class="linkedin">\n              <img class="containerImg" src="assets/imgs/book.png">\n              <div class="connector">\n                  <span class="one"></span>\n                  <span class="two"></span>\n              </div>\n          </li>\n          <li class="yt">\n              <img class="containerImg" src="assets/imgs/timeline.png">\n              <div class="connector">\n                  <span class="one"></span>\n                  <span class="two"></span>\n              </div>\n              <span class="label">时间线</span>\n          </li>\n      </ul>\n  </div>   \n</div> -->\n<!-- 中心发散网络样式面板 结束 -->\n'/*ion-inline-end:"/Users/junhanliu/lab02/ionic/src/pages/main-account/main-account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MainAccountPage);
    return MainAccountPage;
}());

//# sourceMappingURL=main-account.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map