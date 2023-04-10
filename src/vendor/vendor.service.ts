import { Injectable } from '@nestjs/common';
import { VendorDto } from './dto/vendor.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
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

  async getVendor(id: string):Promise<VendorDto> {
    const vendor =  await this.vendorRepository.findOneBy({id});
    return vendor;

  }

  async updateVendor(id: string, updateVendor: VendorDto) {
    const vendor =  await this.vendorRepository.findOneBy({id})
    vendor.name = updateVendor.name;

    await this.vendorRepository.save(vendor)
    return vendor;
  }


}
