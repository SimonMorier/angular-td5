import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { VolComponent } from '../vol/vol.component';
@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [VolComponent],
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss'],
})
export class ListeVolsComponent {
  @Input() volListe!: Vol[];
  @Output() volClicked = new EventEmitter<Vol>();

  emitVol(vol: Vol) {
    console.log('click liste vol');
    this.volClicked.emit(vol);
  }
}
