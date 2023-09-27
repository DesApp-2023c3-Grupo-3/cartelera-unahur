import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { ScheduleDto } from "../schedule";
import { AdvertisingScheduleDto } from "./advertisingSchedule.dto";
import { ResponseAdvertisingDto } from "../advertising/response-advertising.dto";

export class ResponseAdvertisingScheduleDto extends OmitType(AdvertisingScheduleDto, ['advertising','schedule'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    advertising: ResponseAdvertisingDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    schedule: ScheduleDto;
}