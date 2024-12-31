import { Module } from '@nestjs/common';
import {
  Controllers as CatsControllers,
  Providers as CatsProviders,
} from '@server/cats/cats.module';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  controllers: [...CatsControllers],
  providers: [TrpcService, TrpcRouter, ...CatsProviders],
})
export class TrpcModule {}
