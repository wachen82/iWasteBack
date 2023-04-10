import {Vendor} from "../../vendor/entities/vendor.entity";
import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { WasteDto} from "../dto/waste.dto";
import {WasteType} from "../../waste-type/entities/waste-type.entity";

@Entity({name:'waste'})
export class Waste implements WasteDto {
    @PrimaryGeneratedColumn("uuid")
    id:string;


    @ManyToOne(()=>WasteType, (wasteType)=>wasteType.waste, {cascade:true, eager:true, onDelete:"NO ACTION"})
    @JoinColumn({name: 'wasteType_id', referencedColumnName: 'id'})
    wasteType:WasteType;


    @Column({
        type:Date,

    })
    receivedOn: Date;

    @Column({
        type:'float',
        precision:8,
        scale:2,
    })
    quantity:number;


    @ManyToOne(()=>Vendor, (vendor)=>vendor.waste, {cascade:true, eager:true, onDelete:"NO ACTION"})
    @JoinColumn({name: 'vendor_id', referencedColumnName: 'id'})
    vendor:Vendor;






}
