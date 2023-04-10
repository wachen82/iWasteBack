import {Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, ValidationPipe} from '@nestjs/common';
import { WasteService } from './waste.service';
import { WasteDto } from './dto/waste.dto';
import {BaseEntity} from "typeorm";
import {Waste} from "./entities/waste.entity";

@Controller('waste')
export class WasteController{
  constructor(private readonly wasteService: WasteService) {}

  @Post()
  createWaste(@Body() wasteDto: WasteDto) {
    return this.wasteService.createWaste(wasteDto);
  }

  @Get('/')
   getAllWastes(){
    return this.wasteService.getAllWastes();
    };
  }

  // @Get('/:id')
  // getWaste(@Param('id', new ParseUUIDPipe()) id: string) {
  //   return ;
  // }
  //
  // @Patch('/:id')
  // updateWaste(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateWasteDto: WasteDto) {
  //   return ;
  // }
  //
  // @Delete('/:id')
  // removeWaste(@Param('id', new ParseUUIDPipe()) id: string) {
  //   return ;
  // }
// }
