import { Module } from '@nestjs/common';
import { CatsService } from '@server/cats/cats.service';
import { TrpcRouter } from '@server/trpc/trpc.router';
import { TrpcService } from '@server/trpc/trpc.service';

@Module({
  imports: [],
  providers: [TrpcService, TrpcRouter, CatsService],
})
export class TrpcModule {}
