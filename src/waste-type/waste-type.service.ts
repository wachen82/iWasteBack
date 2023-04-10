import { Injectable } from '@nestjs/common';
import { CreateWasteTypeDto } from './dto/create-waste-type.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {WasteType} from "./entities/waste-type.entity";
import {Repository} from "typeorm";
import {WasteTypeResponse} from "../interfaces/wasteType";

@Injectable()
export class WasteTypeService {
  constructor(
      @InjectRepository(WasteType) private wasteTypeRepository: Repository<WasteType>,
  ) {}
  async create(newWasteType:CreateWasteTypeDto):Promise<WasteTypeResponse> {
    const newType = new WasteType();
    newType.name = newWasteType.name;
    newType.EWC = newWasteType.EWC;

    await  newType.save();
    return newType;
  }

  async findAll(): Promise<WasteType[]> {
    return await WasteType.find();
  }

  async findOne(id: string):Promise<WasteType> {
    const wasteType =  await this.wasteTypeRepository.findOneBy({id});
    return wasteType;
  }


  async remove(id: string) {

    const removeType = await this.wasteTypeRepository.findOneBy({id})
    return removeType.remove();
  }


}
