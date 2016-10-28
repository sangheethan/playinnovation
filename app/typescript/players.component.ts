import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from './player';
import { Club } from './club';
import { PlayerService } from './player.service';

@Component({
  moduleId: module.id,
  selector: 'ss-players',
  templateUrl: '../html/players.component.html',
	styleUrls: ['../css/players.component.css']
})
export class PlayersComponent implements OnInit {
	players: Player[];
	selectedPlayer: Player;

  constructor(
    private playerService: PlayerService, 
    private router: Router){};
  
  getPlayers(): void {
    this.playerService
        .getPlayers()
        .then(players => this.players = players);
  }
  ngOnInit(): void {
    this.getPlayers();
  }
	onSelect(player: Player): void {
		this.selectedPlayer = player;
    document.getElementById('player-info-dialog').showModal();
	}
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPlayer.id]);
  }
}
