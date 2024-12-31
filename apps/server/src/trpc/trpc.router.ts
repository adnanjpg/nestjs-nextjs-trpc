import { INestApplication, Inject, Injectable } from '@nestjs/common';
import { TrpcService } from '@server/trpc/trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { CatsService } from '@server/cats/cats.service';
import { CatsController } from '@server/cats/cats.controller';

@Injectable()
export class TrpcRouter {
  private _catsController: CatsController;
  constructor(
    private readonly trpc: TrpcService,
    @Inject(CatsService) private catsController: CatsController,
  ) {
    this._catsController = catsController;
  }

  appRouter = this.trpc.router({
    hellocats: this.trpc.procedure
      .input(z.object({ name: z.string().optional() }))
      .query(async ({ input }) => {
        const cats = await this._catsController.findAll();

        const cat = cats[0];
        const catStr = `Cat: ${cat.name} is ${cat.age} years old. It is of breed ${cat.breed}`;

        return catStr;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
