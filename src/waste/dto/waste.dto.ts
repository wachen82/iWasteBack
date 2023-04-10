import {IsDate, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Type} from "class-transformer";
import {WasteType} from "../../waste-type/entities/waste-type.entity";
import {Vendor} from "../../vendor/entities/vendor.entity";

export class WasteDto {

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    receivedOn: Date;

    @IsNotEmpty()
    @IsNumber()
    quantity:number;

    @IsNotEmpty()
    @IsString()
    wasteTypeId:WasteType;

    @IsNotEmpty()
    @IsString()
    vendorId:Vendor;

}


