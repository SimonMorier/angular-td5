import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { MatIcon } from '@angular/material/icon';
import { VolClasseDirective } from '../../directives/vol-classe.directive';
import { BagagesDirective } from '../../directives/bagages.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-passager',
  standalone: true,
  imports: [
    MatIcon,
    VolClasseDirective,
    BagagesDirective,
    FormsModule,
    CommonModule,
    MatTooltipModule,
  ],
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.scss'],
})
export class PassagerComponent {
  @Input() passager!: Passager;
  @Input() showPicture!: boolean;
}
