import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.sass']
})
export class IconButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() color: 'btn-primary' | 'btn-secondary'  | 'btn-secondary' = 'btn-primary';
}
