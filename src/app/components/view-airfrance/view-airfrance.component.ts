import { Component } from '@angular/core';
import { FiltresComponent } from '../filtres/filtres.component';
import { ListeVolsComponent } from '../liste-vols/liste-vols.component';
import { ListePassagersComponent } from '../liste-passagers/liste-passagers.component';
import { IFiltres } from '../../models/filtres.model';
import { VolService } from '../../services/vol.service';
import { Vol } from '../../models/vol.model';
import { PassagerService } from '../../services/passager.service';
import { Passager } from '../../models/passager.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-airfrance',
  standalone: true,
  imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss'],
})
export class ViewAirFranceComponent {
  constructor(
    private volService: VolService,
    private passagerService: PassagerService,
    private activatedRoute: ActivatedRoute
  ) {}
  volListe: Vol[] = [];
  passagerListe: Passager[] = [];
  title: string = '';
  path: string = '';

  ngOnInit(): void {
    this.activatedRoute.url.subscribe((url) => {
      this.path = url[0].path;
      this.title = this.path === 'decollages' ? 'DÉCOLLAGES' : 'ATTERRISSAGES';
    });
  }

  getFilterData(filterData: IFiltres) {
    const code = filterData.aeroport.icao;
    const debut = Math.floor(filterData.debut.getTime() / 1000);
    const fin = Math.floor(filterData.fin.getTime() / 1000);

    if (this.path == 'decollages') {
      this.volService.getVolsDepart(code, debut, fin).subscribe({
        next: (vols) => {
          console.table(vols);
          this.volListe = vols;
        },
        error: (error) => {
          alert('There was an error in retrieving vol data from the server');
        },
      });
    } else {
      this.volService.getVolsArrivee(code, debut, fin).subscribe({
        next: (vols) => {
          console.table(vols);
          this.volListe = vols;
        },
        error: (error) => {
          alert('There was an error in retrieving vol data from the server');
        },
      });
    }
  }

  getVol(vol: Vol) {
    this.passagerService.getPassager(vol.icao, 20).subscribe({
      next: (passager) => {
        console.table(passager);
        this.passagerListe = passager;
      },
      error: (error) => {
        alert(
          'There was an error in retrieving passagers data from the server'
        );
      },
    });
  }
}
