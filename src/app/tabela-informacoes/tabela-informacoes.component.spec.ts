import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaInformacoesComponent } from './tabela-informacoes.component';

describe('TabelaInformacoesComponent', () => {
  let component: TabelaInformacoesComponent;
  let fixture: ComponentFixture<TabelaInformacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaInformacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
