import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { VendorModule } from './vendor/vendor.module';
import { WasteModule } from './waste/waste.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Vendor} from "./vendor/entities/vendor.entity";
import {Waste} from "./waste/entities/waste.entity";
import {validate} from "./config/env.validation";
import {DataSource} from "typeorm";
import { WasteTypeModule } from './waste-type/waste-type.module';
import {WasteType} from "./waste-type/entities/waste-type.entity";

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal:true, validate}),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              type: 'mysql',
              host: configService.get<string>('DB_HOST'),
              port: configService.get<number>('DB_PORT'),
              username: configService.get<string>('DB_USERNAME'),
              password: configService.get<string>('DB_PASSWORD'),
              database: configService.get<string>('DB_NAME'),
              bigNumberStrings: false,
              autoLoadEntities: true,
              entities: ["dist/**/**.entity{.ts,.js}"],
              synchronize: false,
              logging: configService.get<boolean>('DB_LOGGING'),

          }),
      }), AuthModule, VendorModule, WasteModule, WasteTypeModule],
  controllers: [],
  providers: [],

})
export class AppModule {
    constructor(private  dataSource:DataSource) {
    }
}
