import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take, tap } from 'rxjs';
import { Standings } from './models/standings.model';
import { GeneralMapper } from './general-mapper';
import { environment } from 'src/environments/environment';
import { Fixtures } from './models/fixtures.model';
import { ApiUrls } from './enums/api-urls.enum';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  standingsInfo$: BehaviorSubject<any> = new BehaviorSubject(null);
  fixturesInfo$: BehaviorSubject<any> = new BehaviorSubject(null);
  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'v3.football.api-sports.io',
		  'x-rapidapi-key': environment.apiKey 
    })
  };


  constructor(private httpClient:HttpClient, private generalMapper:GeneralMapper) { }

  getStandings(leagueId:number): Observable<Standings[]> {
    const date = new Date();
    const season = date.getFullYear();
    const params = new HttpParams().set('league',leagueId).set('season',season);
    const standingsResponse = this.httpClient.get(ApiUrls.Standings,{...this.httpOptions,params})
    .pipe(take(1))

    return standingsResponse.pipe(map((res)=>{
      const formatedStandings: Standings[] = this.generalMapper.mapToStandings(res);
      this.standingsInfo$.next(formatedStandings);
      return formatedStandings;
    }))

  }

  getFixture(teamId:number): Observable<Fixtures[]> {
    const date = new Date();
    const season = date.getFullYear();
    const params = new HttpParams().set('team',teamId).set('season',season).set('last',10)
    const fixturesResponse = this.httpClient.get(ApiUrls.Fixtures,{...this.httpOptions,params})
    .pipe(take(1))

    return fixturesResponse.pipe(map((res)=>{
      const formatedFixtures: Fixtures[] = this.generalMapper.mapToFixture(res);
      this.fixturesInfo$.next(formatedFixtures);
      return formatedFixtures;
    }))
  }

}
