import { FormCadastroReativoModule } from './form-cadastro-reativo.module';

describe('FormCadastroReativoModule', () => {
  let formCadastroReativoModule: FormCadastroReativoModule;

  beforeEach(() => {
    formCadastroReativoModule = new FormCadastroReativoModule();
  });

  it('should create an instance', () => {
    expect(formCadastroReativoModule).toBeTruthy();
  });
});
