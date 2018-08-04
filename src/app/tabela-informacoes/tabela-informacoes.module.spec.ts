import { TabelaInformacoesModule } from './tabela-informacoes.module';

describe('TabelaInformacoesModule', () => {
  let tabelaInformacoesModule: TabelaInformacoesModule;

  beforeEach(() => {
    tabelaInformacoesModule = new TabelaInformacoesModule();
  });

  it('should create an instance', () => {
    expect(tabelaInformacoesModule).toBeTruthy();
  });
});
