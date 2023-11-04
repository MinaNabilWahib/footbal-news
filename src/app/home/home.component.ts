import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FootballApiService } from '../core/football-api.service';
import { TopLeaguesIDs } from '../core/enums/leagues.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private footballApiService: FootballApiService){}

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            { label: 'England', icon: 'pi pi-fw pi-flag-fill' , id:'englandSelect', command:() => this.getStandings(TopLeaguesIDs.PremierLeague)},
            { label: 'Spain', icon: 'pi pi-fw pi-flag-fill' , id:'spainSelect'},
            { label: 'Germany', icon: 'pi pi-fw pi-flag-fill' , id:'germanySelect'},
            { label: 'France', icon: 'pi pi-fw pi-flag-fill' , id:'franceSelect'},
            { label: 'Italy', icon: 'pi pi-fw pi-flag-fill' , id:'italySelect'}
        ];
    }

    getStandings(leagueId:number){
      this.footballApiService.getStandings(leagueId).subscribe((res)=>{
        console.log(res);
      })
    }
    
}
