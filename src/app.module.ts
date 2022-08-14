import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountService } from './account/account.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AccountService],
})
export class AppModule {}
