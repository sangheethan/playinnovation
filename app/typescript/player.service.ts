import { Injectable }    from '@angular/core';
import {Player} from './player';
import {PLAYERS} from './mock-players';

@Injectable()
export class PlayerService {
	
	getPlayers(): Promise<Player[]> {
		return Promise.resolve(PLAYERS);
	}
	
	// Get the player information when you pass an id.
	getPlayer(id:number):Promise<Player> {
		// get all the players and then find the player with the player id
		return this.getPlayers()
					.then(players => players.find(player => player.id === id)); //
	}
} 