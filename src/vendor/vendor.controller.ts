import {Controller, Get, Post, Body, Patch, Param, ParseUUIDPipe} from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorDto } from './dto/vendor.dto';


@Controller('app/vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post('/')
  createVendor(@Body() newVendor: VendorDto) {
    return this.vendorService.createVendor(newVendor);
  }

  @Get('/')
  getVendors() {
    return this.vendorService.getVendors();
  }

  @Get('/:id')
  getVendor(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.vendorService.getVendor(id);
  }

  @Patch('/:id')
  updateVendor(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatedVendor: VendorDto) {
    return this.vendorService.updateVendor(id, updatedVendor);
  }

}
