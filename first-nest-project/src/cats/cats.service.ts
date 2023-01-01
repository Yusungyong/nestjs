import { Injectable } from '@nestjs/common';
import { Cats } from './inrterface/cats.interface';

@Injectable()
export class CatsService {

  private readonly cats: Cats[] = [];

  create(cats: Cats){
    this.cats.push(cats)
  }

  findAll(): Cats[]{
    return this.cats;
  }
}
