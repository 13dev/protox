import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';
import { Logger } from '@nestjs/common';

CommandFactory.run(AppModule, {
  errorHandler: (err) => {
    Logger.error(err);
    process.exit(1);
  },
}).then();
