import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InitCommand } from './commands/init.command';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [InitCommand],
})
export class AppModule {}
