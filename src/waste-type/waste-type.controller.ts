import {Controller, Get, Post, Body, Patch, Param, ParseUUIDPipe} from '@nestjs/common';
import { WasteTypeService } from './waste-type.service';
import { CreateWasteTypeDto } from './dto/create-waste-type.dto';
import { WasteTypeResponse} from "../interfaces/wasteType";


@Controller('app/waste-type')
export class WasteTypeController {
  constructor(private readonly wasteTypeService: WasteTypeService) {}

  @Post('/')
  create(@Body() newWasteType: CreateWasteTypeDto):Promise<WasteTypeResponse> {
    return this.wasteTypeService.create(newWasteType);
  }

  @Get('/')
  findAll() {
    return this.wasteTypeService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.wasteTypeService.findOne(id);
  }
  @Patch('/:id')
  updateWasteType(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatedWasteType: CreateWasteTypeDto) {
    return this.wasteTypeService.updateWasteType(id, updatedWasteType);
  }

}
