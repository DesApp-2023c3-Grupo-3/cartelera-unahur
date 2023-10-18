import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { AdvertisingDto } from "./advertising.dto";
import { AdvertisingTypeDto } from "../advertising-type";
import { ResponseUserDto } from "../user";
import { ScheduleDto } from "../schedule";

export class ResponseAdvertisingDto extends OmitType(AdvertisingDto, ['advertisingType','user','schedules'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @ApiProperty({
    })
    advertisingType: AdvertisingTypeDto;

    @IsNotEmptyObject({ nullable: true }, )
    @ApiProperty({
    })
    user: ResponseUserDto;

    @IsOptional()
    @ApiProperty({
    })
    schedules: ScheduleDto[];
}