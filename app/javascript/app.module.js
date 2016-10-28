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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var player_detail_component_1 = require('./player-detail.component');
var players_component_1 = require('./players.component');
var player_service_1 = require('./player.service');
var dashboard_component_1 = require('./dashboard.component');
var app_routing_module_1 = require('./app-routing.module');
// We are using the routerModule forRoot method to configure the paths and its specific components.
// On line 26 I am using the redirectTo property to redirect the main page to the dashboard component.
// **MOCKS ALERT
// We're going to trick the HTTP client into fetching and saving data from a mock service, the in-memory web API.
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, player_detail_component_1.PlayerDetailComponent, players_component_1.PlayersComponent],
            providers: [player_service_1.PlayerService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map