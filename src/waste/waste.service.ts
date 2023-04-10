import {Injectable} from '@nestjs/common';
import {WasteDto } from './dto/waste.dto';
import {Waste} from "./entities/waste.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";




@Injectable()
export class WasteService {

  constructor(
      @InjectRepository(Waste) private wasteRepository:Repository<Waste>) {
  }
  //
  async createWaste(newWaste:WasteDto): Promise<WasteDto> {
    const waste = new Waste();
    waste.wasteTypeId= newWaste.wasteTypeId;
    waste.vendorId = newWaste.vendorId;
    waste.quantity = newWaste.quantity;
    waste.receivedOn = newWaste.receivedOn;

    await this.wasteRepository.save(waste);

    return waste;
  }

  async getAllWastes(): Promise<Waste[]> {

    return await this.wasteRepository.find();
  }

  async getWaste(id: string): Promise<Waste> {
    const waste =  await this.wasteRepository.findOneBy({id});
    return waste;

  }

  async updateWaste(id:string, updateWaste:WasteDto) {
    const waste = await this.wasteRepository.findOneBy({id});
    waste.receivedOn = updateWaste.receivedOn;
    waste.quantity = updateWaste.quantity;
    waste.wasteTypeId = updateWaste.wasteTypeId;
    waste.vendorId = updateWaste.vendorId;


    await this.wasteRepository.save(waste);

    return waste;
   }

  async removeWaste(id: string) {
    const removeWaste = await this.wasteRepository.findOneBy({id})
    await this.wasteRepository.remove(removeWaste)
    return removeWaste;
}
}
