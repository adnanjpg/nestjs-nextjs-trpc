import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

export const Providers = [CatsService];
export const Controllers = [CatsController];

@Module({
  controllers: Controllers,
  providers: Providers,
})
export class CatsModule {}
