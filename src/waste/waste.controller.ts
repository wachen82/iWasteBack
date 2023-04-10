import {Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe} from '@nestjs/common';
import { WasteService } from './waste.service';
import { WasteDto } from './dto/waste.dto';

@Controller('waste')
export class WasteController{
  constructor(private readonly wasteService: WasteService) {}

  @Post()
  createWaste(@Body() newWaste: WasteDto):Promise<WasteDto> {
    return this.wasteService.createWaste(newWaste);
  }

  @Get('/')
   getAllWastes(){
    return this.wasteService.getAllWastes();
    };

    @Get('/:id')
    getWaste(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.wasteService.getWaste(id);
    }

  @Patch('/:id')
  updateWaste(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateWaste: WasteDto) {
    return this.wasteService.updateWaste(id, updateWaste);
  }
  //
  @Delete('/:id')
  removeWaste(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.wasteService.removeWaste(id) ;

  }
}
