import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadoresController } from 'src/jogadores/jogadores.controller';
import { JogadoresModule } from 'src/jogadores/jogadores.module';

@Module({
  imports: [],
  controllers: [AppController, JogadoresController],
  providers: [AppService, JogadoresModule],
})
export class AppModule {}
