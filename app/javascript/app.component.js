"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var club_service_1 = require('./club.service');
/**
 * Component Decorator
 * We are using the RouterModule directives and I have put the explanation below.
 * - routerLink is a directive responsible for binding the string to tell the router
 *   where to navigate to
 * - <router-outlet> When the user navigates to a route i.e. players this directive tells
 *   where to display the contents of the component.
 */
var AppComponent = (function () {
    function AppComponent(ClubService) {
        this.ClubService = ClubService;
        this.title = 'Street Snooker Leaderboard'; // title class property
    }
    AppComponent.prototype.getClubs = function () {
        var _this = this;
        this.ClubService
            .getClubs()
            .then(function (clubs) { return _this.clubs = clubs; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getClubs();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'leaderboard',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<ul class=\"club-list\">\n\t\t\t<li>Club Scores</li>\n\t\t\t<li *ngFor=\"let club of clubs\">\n\t\t\t\t<img src=\"{{club.logo}}\" />\n\t\t\t\t<span>High Score: {{club.highscore}}</span>\n\t\t\t</li>\n\t\t</ul>\n\t\t<router-outlet></router-outlet>\n\t",
            styleUrls: ['../css/app.component.css'],
            providers: [club_service_1.ClubService]
        }), 
        __metadata('design:paramtypes', [club_service_1.ClubService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map