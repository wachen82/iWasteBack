import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateWasteTypeDto {
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsNumber()
    EWC:number;
}
