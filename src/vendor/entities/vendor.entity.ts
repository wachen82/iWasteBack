import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Waste} from "../../waste/entities/waste.entity";

@Entity({name:'vendor'})
export class Vendor {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({
        length:60,
    })
    name:string;


    @OneToMany(()=>Waste, (waste)=>waste.vendorId)
    waste:Waste;




}
