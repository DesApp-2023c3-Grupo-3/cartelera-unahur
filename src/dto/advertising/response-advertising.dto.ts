import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { AdvertisingDto } from "./advertising.dto";
import { AdvertisingTypeDto } from "../advertising-type";
import { SectorDto } from "../sector";
import { ResponseUserDto } from "../user";
import { ScheduleDto } from "../schedule";

export class ResponseAdvertisingDto extends OmitType(AdvertisingDto, ['advertisingType','user','sector','schedules'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    advertisingType: AdvertisingTypeDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    user: ResponseUserDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    sector: SectorDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    schedules: Array<ScheduleDto>;
  
}