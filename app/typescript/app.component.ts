import { Component, OnInit } from '@angular/core';
import { Club } from './club';
import { ClubService } from './club.service';
/**
 * Component Decorator
 * We are using the RouterModule directives and I have put the explanation below.
 * - routerLink is a directive responsible for binding the string to tell the router 
 *   where to navigate to
 * - <router-outlet> When the user navigates to a route i.e. players this directive tells 
 *   where to display the contents of the component.
 */
@Component({
	moduleId: module.id,
	selector: 'leaderboard',
	template: `
		<h1>{{title}}</h1>
		<ul class="club-list">
			<li>Club Scores</li>
			<li *ngFor="let club of clubs">
				<img src="{{club.logo}}" />
				<span>High Score: {{club.highscore}}</span>
			</li>
		</ul>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['../css/app.component.css'],
	providers: [ClubService]
})

export class AppComponent {

	title = 'Street Snooker Leaderboard'; // title class property
	clubs: Club[];
	
	constructor(private ClubService:ClubService){}

	getClubs():void {
		this.ClubService
				.getClubs()
				.then(clubs => this.clubs = clubs);
	}
	ngOnInit():void {
		this.getClubs();
	}
}