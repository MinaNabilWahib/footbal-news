import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StandingsComponent } from './standings/standings.component';
import { CacheInterceptor } from './core/cache-interceptor';
import { TeamStatisticsComponent } from './team-statistics/team-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StandingsComponent,
    TeamStatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
