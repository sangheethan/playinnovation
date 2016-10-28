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
var common_1 = require('@angular/common');
var player_service_1 = require('./player.service');
var PlayerDetailComponent = (function () {
    // Injecting ActivatedRoute, PlayerService and  Location to the constructor
    function PlayerDetailComponent(playerService, route, location) {
        this.playerService = playerService;
        this.route = route;
        this.location = location;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Loop through the parameters passed on the route URL
        this.route.params.forEach(function (params) {
            // Retrieve the id parameter from the route and store it in a variable let.
            // We use the Javascript (+) operator in front of the params to convert the route parameter,
            // which is always a string to number.
            var id = +params['id'];
            // Get the player details from the playerService using the id and save it in the player type
            _this.playerService.getPlayer(id)
                .then(function (player) { return _this.player = player; });
        });
    };
    PlayerDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PlayerDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ss-player-detail',
            templateUrl: '../html/player-detail.component.html',
            styleUrls: ['../css/player-details.component.css']
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.ActivatedRoute, common_1.Location])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());
exports.PlayerDetailComponent = PlayerDetailComponent;
//# sourceMappingURL=player-detail.component.js.map