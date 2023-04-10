import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorDto } from './dto/vendor.dto';


@Controller('vendor')
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
  getVendor(@Param('id') id: string) {
    return this.vendorService.getVendor(+id);
  }

  @Patch('/:id')
  updateVendor(@Param('id') id: string, @Body() updateVendorDto: VendorDto) {
    return this.vendorService.updateVendor(+id, updateVendorDto);
  }

  @Delete('/:id')
  removeVendor(@Param('id') id: string) {
    return this.vendorService.removeVendor(+id);
  }
}
