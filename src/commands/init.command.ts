import { Command, CommandRunner, Option } from 'nest-commander';
import { Logger } from '@nestjs/common';

@Command({ name: 'init', description: 'Init a project', arguments: '<project-name>' })
export class InitCommand implements CommandRunner {
  private logger = new Logger(InitCommand.name);
  private project: string;

  async run([name]: string[]): Promise<void> {
    this.project = String(name);
    console.log(this.project);
  }
}
