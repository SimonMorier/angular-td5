import {
  Component,
  EventEmitter,
  LOCALE_ID,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { AEROPORTS } from './../../constants/aeroport.constant';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IAeroport } from '../../models/aeroport.model';
import { ThreeDayRangeSelectionStrategy } from '../../date-adapter';
import {
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IFiltres } from '../../models/filtres.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-filtres',
  standalone: true,
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss'],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: ThreeDayRangeSelectionStrategy,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FiltresComponent {
  @Output() filterApplied = new EventEmitter<IFiltres>();

  aeroports: IAeroport[] = AEROPORTS;

  formFilter = new FormGroup({
    aeroport: new FormControl<IAeroport | null>(null, Validators.required),
    debut: new FormControl<Date | null>(null, Validators.required),
    fin: new FormControl<Date | null>(null, Validators.required),
  });

  applyFilters() {
    const filtre: IFiltres = {
      aeroport: this.formFilter.value.aeroport as IAeroport,
      debut: this.formFilter.value.debut as Date,
      fin: this.formFilter.value.fin as Date,
    };
    this.filterApplied.emit(filtre);
  }
}
