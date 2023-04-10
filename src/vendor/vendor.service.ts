import { Injectable } from '@nestjs/common';
import { VendorDto } from './dto/vendor.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {WasteType} from "../waste-type/entities/waste-type.entity";
import {BaseEntity, Repository} from "typeorm";
import {Vendor} from "./entities/vendor.entity";
import {VendorResponse} from "../interfaces/vendor";


@Injectable()
export class VendorService {
  constructor(

  @InjectRepository(Vendor) private vendorRepository: Repository<Vendor>,
  ){}

  async createVendor(newVendor: VendorDto):Promise<VendorResponse> {
    const vendor = new Vendor();
    vendor.name = newVendor.name;
    await  this.vendorRepository.save(vendor);
    return vendor;
  }

  async getVendors() {
    return this.vendorRepository.find();
  }

  async getVendor(id: number) {
    return `This action returns a #${id} vendor`;
  }

  async updateVendor(id: number, updateVendorDto: VendorDto) {
    return `This action updates a #${id} vendor`;
  }

  async removeVendor(id: number) {
    return `This action removes a #${id} vendor`;
  }
}
