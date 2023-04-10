import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WasteTypeService } from './waste-type.service';
import { CreateWasteTypeDto } from './dto/create-waste-type.dto';
import { WasteTypeResponse} from "../interfaces/wasteType";

@Controller('waste-type')
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
  findOne(@Param('id') id: string) {
    return this.wasteTypeService.findOne(id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.wasteTypeService.remove(id);
  }
}
