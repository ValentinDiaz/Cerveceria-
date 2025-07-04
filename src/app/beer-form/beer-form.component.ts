import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cerveza } from '../beer-list/beer';

@Component({
  selector: 'app-beer-form',
  standalone: false,
  templateUrl: './beer-form.component.html',
  styleUrl: './beer-form.component.scss',
})
export class BeerFormComponent {
  @Output() valorChange: EventEmitter<Cerveza> = new EventEmitter<Cerveza>();

  formCervezas = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    descripcion: new FormControl(''),
    abv: new FormControl(0, [Validators.required, Validators.min(0)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    precio: new FormControl(0, [Validators.required, Validators.min(0)]),
    clearance: new FormControl(false),
    cantidad: new FormControl(0, [Validators.required, Validators.min(0)]),
    imagen: new FormControl(''),
  });

    guardarCerveza() {
      if (this.formCervezas.valid)
        this.valorChange.emit(this.formCervezas.value as Cerveza);
      console.log ( "enviando ")
    }
}
