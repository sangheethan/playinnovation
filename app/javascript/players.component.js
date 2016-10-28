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
var PlayersComponent = (function () {
    function PlayersComponent(playerService, router) {
        this.playerService = playerService;
        this.router = router;
    }
    ;
    PlayersComponent.prototype.getPlayers = function () {
        var _this = this;
        this.playerService
            .getPlayers()
            .then(function (players) { return _this.players = players; });
    };
    PlayersComponent.prototype.ngOnInit = function () {
        this.getPlayers();
    };
    PlayersComponent.prototype.onSelect = function (player) {
        this.selectedPlayer = player;
        document.getElementById('player-info-dialog').showModal();
    };
    PlayersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPlayer.id]);
    };
    PlayersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ss-players',
            templateUrl: '../html/players.component.html',
            styleUrls: ['../css/players.component.css']
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService, router_1.Router])
    ], PlayersComponent);
    return PlayersComponent;
}());
exports.PlayersComponent = PlayersComponent;
//# sourceMappingURL=players.component.js.map