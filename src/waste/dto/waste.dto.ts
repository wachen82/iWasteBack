import {VendorDto} from "../../vendor/dto/vendor.dto";
import {IsDate, IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";
import {CreateWasteTypeDto} from "../../waste-type/dto/create-waste-type.dto";


export class WasteDto {
    @IsNotEmpty()
    @IsString()
    wasteType:CreateWasteTypeDto;

    @IsNotEmpty()
    @IsDate()
    receivedOn: Date;

    @IsNotEmpty()
    @IsNumber()
    quantity:number;


    @IsNotEmpty()
    @IsString()
    vendor:VendorDto;

}


