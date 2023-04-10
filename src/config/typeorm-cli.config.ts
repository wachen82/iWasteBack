import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import {Vendor} from "../vendor/entities/vendor.entity";
import {Waste} from "../waste/entities/waste.entity";

import {WasteType} from "../waste-type/entities/waste-type.entity";



config();

const configService = new ConfigService();

export default new DataSource({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    bigNumberStrings: false,
    logging: configService.get<boolean>('DB_LOGGING'),
    entities: [Vendor],
    synchronize:false,

});