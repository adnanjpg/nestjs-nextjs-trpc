import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      age: 1,
      breed: 'Persian',
      name: 'Alice',
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Promise<Cat[]> {
    return Promise.resolve(this.cats);
  }
}
