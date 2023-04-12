import { Module } from '@nestjs/common';
import { WasteService } from './waste.service';
import { WasteController } from './waste.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Waste} from "./entities/waste.entity";
import {WasteType} from "../waste-type/entities/waste-type.entity";
import {Vendor} from "../vendor/entities/vendor.entity";

@Module({
  imports:[TypeOrmModule.forFeature([Waste, WasteType, Vendor ])],
  controllers: [WasteController],
  providers: [WasteService],
})
export class WasteModule {}
