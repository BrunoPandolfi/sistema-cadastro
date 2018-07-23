import { FormularioCadastroModule } from './formulario-cadastro.module';

describe('FormularioCadastroModule', () => {
  let formularioCadastroModule: FormularioCadastroModule;

  beforeEach(() => {
    formularioCadastroModule = new FormularioCadastroModule();
  });

  it('should create an instance', () => {
    expect(formularioCadastroModule).toBeTruthy();
  });
});
