import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerService } from './player.service';
import { Player } from './player';
import { Club } from './club';

@Component({
	moduleId: module.id,
	selector: 'ss-player-detail',
	templateUrl: '../html/player-detail.component.html',
	styleUrls: ['../css/player-details.component.css']
})

export class PlayerDetailComponent implements OnInit {	
	player: Player;

	// Injecting ActivatedRoute, PlayerService and  Location to the constructor
	constructor(
		private playerService: PlayerService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		// Loop through the parameters passed on the route URL
		this.route.params.forEach((params: Params) => {
			// Retrieve the id parameter from the route and store it in a variable let.
			// We use the Javascript (+) operator in front of the params to convert the route parameter,
			// which is always a string to number.
			let id = +params['id'];
			// Get the player details from the playerService using the id and save it in the player type
			this.playerService.getPlayer(id)
				.then(player => this.player = player);
		}); 
	}
	goBack(): void {
		this.location.back();
	}
}