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
var router_1 = require('@angular/router');
var player_service_1 = require('./player.service');
var DashboardComponent = (function () {
    // Inject the PlayerService in the constructor and hold it in a private	playerService field.
    function DashboardComponent(router, playerService) {
        this.router = router;
        this.playerService = playerService;
        // Define and initialize a players array property
        this.players = [];
    }
    // Call the service to get players inside the Angular ngOnInit lifecycle hook.
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayers()
            .then(function (players) { return _this.players = players.slice(1, 5); });
    };
    // When the user clicks a player on the dashboard the player instance is passed to this function
    DashboardComponent.prototype.gotoDetail = function (player) {
        // Set a route link parameters array
        var link = ['/detail', player.id];
        // Pass the array to the router's navigate method
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ss-dashboard',
            templateUrl: '../html/dashboard.component.html',
            styleUrls: ['../css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, player_service_1.PlayerService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map