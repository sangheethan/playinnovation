import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { PlayerDetailComponent } from './player-detail.component';
import { PlayersComponent } from './players.component';

// Pull the routes into a variable. You might export it in future and it clarifies the Routing Module pattern.
const routes: Routes = [
	{ path: '',redirectTo: '/players', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'players', component: PlayersComponent },
	{ path: 'detail/:id', component: PlayerDetailComponent, }
];

@NgModule({
	// Add RouterModule.forRoot(routes) to imports.
	imports: [RouterModule.forRoot(routes)],
	// Add RouterModule to exports so that the components in the companion module have access to Router 
	// declarables such as RouterLink and RouterOutlet.
	exports: [RouterModule]
	// No declarations! Declarations are the responsibility of the companion module.
	// Add module providers for guard services if you have them; there are none in this example.
})
export class AppRoutingModule {}