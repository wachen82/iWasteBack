import { Module } from '@nestjs/common';
import { WasteTypeService } from './waste-type.service';
import { WasteTypeController } from './waste-type.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Waste} from "../waste/entities/waste.entity";
import {WasteType} from "./entities/waste-type.entity";

@Module({
  imports:[TypeOrmModule.forFeature([WasteType])],
  controllers: [WasteTypeController],
  providers: [WasteTypeService]
})
export class WasteTypeModule {}
