import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';

@Module({
  imports: [],
  controllers: [JogadoresController],
  providers: [],
  exports: [],
})
export class JogadoresModule {}
