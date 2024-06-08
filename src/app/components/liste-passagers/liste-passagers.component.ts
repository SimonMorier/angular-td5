import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';
import { PassagerComponent } from '../passager/passager.component';
import { Passager } from '../../models/passager.model';
@Component({
  selector: 'app-liste-passagers',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    PassagerComponent,
  ],
  templateUrl: './liste-passagers.component.html',
  styleUrls: ['./liste-passagers.component.scss'],
})
export class ListePassagersComponent {
  @Input() passagerListe!: Passager[];
  isChecked = false;
}
