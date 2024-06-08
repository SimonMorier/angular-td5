import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Vol } from '../../models/vol.model';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [MatIcon, MatCardModule, MatGridListModule],
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss'],
})
export class VolComponent {
  @Input() vol!: Vol;
  @Output() volClicked = new EventEmitter<Vol>();
  path: string = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  emitVol(vol: Vol) {
    console.log('click vol');
    this.volClicked.emit(vol);
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.path = url[0].path;
    });
  }
}
