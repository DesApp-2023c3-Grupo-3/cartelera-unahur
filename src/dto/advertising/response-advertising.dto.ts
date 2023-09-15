import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { AdvertisingDto } from "./advertising.dto";
import { AdvertisingTypeDto } from "../advertising-type";
import { ScheduleDto } from "../schedule";
import { SectorDto } from "../sector";
import { ResponseUserDto } from "../user";

export class ResponseAdvertisingDto extends OmitType(AdvertisingDto, ['imageType','user','sector','schedule'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    imageType: AdvertisingTypeDto;

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
    schedule: ScheduleDto;
  
}