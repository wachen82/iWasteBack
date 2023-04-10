import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CreateWasteTypeDto} from "../dto/create-waste-type.dto";
import {Waste} from "../../waste/entities/waste.entity";


@Entity({name:'wasteType'})
export class WasteType extends BaseEntity implements CreateWasteTypeDto{

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        length:60,
    })
    name:string;

    @Column({
        type: "mediumint",
        precision:5,
    })
    EWC:number;

    @OneToMany(()=>Waste, (waste)=>waste.wasteType)
    waste:WasteType;
}
