import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { AdvertisingScreenDto } from "./advertising-screen.dto";
import {  ResponseAdvertisingDto } from "../advertising";
import { ResponseScreenDto } from "../screen";

export class ResponseImageScreenDto extends OmitType(AdvertisingScreenDto, ['image','screen'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    image: ResponseAdvertisingDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    screen: ResponseScreenDto;
  
}