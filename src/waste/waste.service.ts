import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { WasteDto } from './dto/waste.dto';
import {Waste} from "./entities/waste.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";



@Injectable()
export class WasteService {

  constructor(
      @InjectRepository(Waste) private wasteRepository:Repository<Waste>) {
  }
  //
  async getAllWastes(): Promise<Waste[]> {
    return await this.wasteRepository.find();
  }

  async getWaste(id: string): Promise<Waste> {
    const waste = await this.wasteRepository.findOne({where:{id}});
    if(!waste){
      throw new HttpException('NOTFOUND', HttpStatus.NOT_FOUND);
    }
    return waste;

  }

  async createWaste(newWaste:WasteDto): Promise<WasteDto> {
    const waste = new Waste();
    waste.wasteType.name = newWaste.wasteType.name;
    waste.wasteType.EWC = newWaste.wasteType.EWC;
    waste.vendor.name = newWaste.vendor.name;
    waste.quantity = newWaste.quantity;
    waste.receivedOn = newWaste.receivedOn;

    await this.wasteRepository.save(waste);

    return waste;
  }

  async updateWaste(id: string) :Promise<WasteDto> {
    return ;
  }

//   async removeWaste(id: number): Promise<WasteResponse> {
//     return ;
// }
}
