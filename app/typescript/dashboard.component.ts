import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from './player';
import { PlayerService } from './player.service';
@Component({
	moduleId: module.id,
	selector: 'ss-dashboard',
	templateUrl: '../html/dashboard.component.html',
	styleUrls: ['../css/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
	// Define and initialize a players array property
	players: Player[] = [];

	// Inject the PlayerService in the constructor and hold it in a private	playerService field.
	constructor(private router: Router, private playerService: PlayerService) {}

	// Call the service to get players inside the Angular ngOnInit lifecycle hook.
	ngOnInit():void {
		this.playerService.getPlayers()
			.then(players => this.players = players.slice(1, 5));
	}

	// When the user clicks a player on the dashboard the player instance is passed to this function
	gotoDetail(player: Player): void{
		// Set a route link parameters array
		let link = ['/detail', player.id];
		// Pass the array to the router's navigate method
		this.router.navigate(link);
	}
 }