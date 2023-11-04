import { Injectable } from '@angular/core';
import { Standings } from './models/standings.model';
import { Fixtures } from './models/fixtures.model';

@Injectable({
    providedIn: 'root'
  })

export class GeneralMapper {
    constructor(){}

    mapToStandings(sourceJson: any):Standings[]{
        let standings: Standings[] = [];
        standings = sourceJson.response.league.standings.map((unformatedStandings:any)=>{
            const formatedstandings : Standings = {
                name: '',
                logo: '',
                gamesPlayed: 0,
                gamesWin: 0,
                gamesLose: 0,
                gamesDraw: 0,
                goalDiff: 0,
                points: 0,
                teamId: 0
            }
            formatedstandings.teamId = unformatedStandings.team.id;
            formatedstandings.name = unformatedStandings.team.name;
            formatedstandings.logo = unformatedStandings.team.logo;
            formatedstandings.points = unformatedStandings.points;
            formatedstandings.goalDiff = unformatedStandings.goalsDiff;
            formatedstandings.gamesPlayed = unformatedStandings.all.played;
            formatedstandings.gamesWin = unformatedStandings.all.win; 
            formatedstandings.gamesLose = unformatedStandings.all.lose; 
            formatedstandings.gamesDraw = unformatedStandings.all.draw;
            return formatedstandings
        })

        return standings;

    }

    mapToFixture(sourceJson:any):Fixtures[]{
        let fixtures: Fixtures[] = [];
        fixtures = sourceJson.response.map((unformatedFixtures:any)=>{
            const formatedFixtures: Fixtures = {
                firstTeamName: '',
                secondTeamName: '',
                firstTeamScore: 0,
                secondTeamScore: 0,
                firstTeamLogo: '',
                secondTeamLogo: ''
            }
            formatedFixtures.firstTeamName = unformatedFixtures.teams.home.name;
            formatedFixtures.secondTeamName = unformatedFixtures.teams.away.name;
            formatedFixtures.firstTeamLogo = unformatedFixtures.teams.home.logo;
            formatedFixtures.secondTeamLogo = unformatedFixtures.teams.away.logo;
            formatedFixtures.firstTeamScore = unformatedFixtures.goals.home;
            formatedFixtures.secondTeamScore = unformatedFixtures.goals.away;
            return formatedFixtures;

        })

        return fixtures;
    }
}