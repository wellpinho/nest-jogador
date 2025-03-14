import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dto/criarJogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  create(@Body() body: CriarJogadorDto) {
    return body;
  }
}
