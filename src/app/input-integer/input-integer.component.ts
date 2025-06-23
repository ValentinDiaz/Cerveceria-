import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cerveza } from '../beer-list/beer';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss',
})
export class InputIntegerComponent {
  @Input() valor!: number;
  @Input() max!: number;
  @Output() valorChange: EventEmitter<number> = new EventEmitter<number>();

  sumarCantidad() {
    if (this.valor < this.max) {
      this.valor++;
      this.valorChange.emit(this.valor);
    }
  }
  restarCantidad() {
    if (this.valor > 0) {
      this.valor--;
      this.valorChange.emit(this.valor);
    } else {
      return;
    }
  }
}
