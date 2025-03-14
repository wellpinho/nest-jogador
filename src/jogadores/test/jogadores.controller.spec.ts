import { Test, TestingModule } from '@nestjs/testing';
import { JogadoresController } from '../jogadores.controller';
import { faker } from '@faker-js/faker';
import { CriarJogadorDto } from '../dto/criarJogador.dto';

describe('JogadoresController', () => {
  let controller: JogadoresController;

  const jogador: CriarJogadorDto = {
    name: faker.person.fullName(),
    phone: faker.word.words({ count: { min: 10, max: 11 } }),
    email: faker.internet.email(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JogadoresController],
    }).compile();

    controller = module.get<JogadoresController>(JogadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('criarAtualizarJogador', () => {
    const response = controller.create(jogador);
    expect(response).toStrictEqual(jogador);
  });
});
