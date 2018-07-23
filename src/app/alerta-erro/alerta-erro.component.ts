import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta-erro',
  templateUrl: './alerta-erro.component.html',
  styleUrls: ['./alerta-erro.component.css']
})
export class AlertaErroComponent implements OnInit {

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;

  constructor() { }

  ngOnInit() {
  }

}
