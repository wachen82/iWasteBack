import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Waste} from "../waste/entities/waste.entity";
import {Vendor} from "./entities/vendor.entity";

@Module({
  controllers: [VendorController],
  providers: [VendorService],
  imports:[TypeOrmModule.forFeature([Vendor])]

})
export class VendorModule {}
