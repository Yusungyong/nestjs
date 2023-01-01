import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CatsService } from './cats.service';
import { CreateCatsDto } from './CreateCatsDto';
import { Cats } from './inrterface/cats.interface';

@Controller('cats')
export class CatsController {

  constructor(private catsService: CatsService){};

  @Get()
  findAll(): Cats[]{
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id')id: string){
      return `This action returns a #${id} cat`;
  }

  @Post()
  create(@Body() createCatsDto : CreateCatsDto){
    return this.catsService.create(createCatsDto);
  }

  @Put(':id')
  update(@Param('id')id: string, @Body() createCatsDto : CreateCatsDto){
    return `This action updates a #${id} cat`
  }


  @Delete(':id')
  remove(@Param('id')id: string ){
    return `This action removes a #${id} cat`;
  }
}
