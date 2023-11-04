import { Component, Input } from '@angular/core';
import { Standings } from '../core/models/standings.model';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent {
  @Input() standings!: Standings[];
}
