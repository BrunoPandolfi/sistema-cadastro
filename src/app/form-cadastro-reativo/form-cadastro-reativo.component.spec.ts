import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroReativoComponent } from './form-cadastro-reativo.component';

describe('FormCadastroReativoComponent', () => {
  let component: FormCadastroReativoComponent;
  let fixture: ComponentFixture<FormCadastroReativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroReativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroReativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
