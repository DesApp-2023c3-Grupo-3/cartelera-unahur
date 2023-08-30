import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { ImageScreenDto } from "./image-screen.dto";
import {  ResponseImageDto } from "../image";
import { ResponseScreenDto } from "../screen";

export class ResponseImageScreenDto extends OmitType(ImageScreenDto, ['image','screen'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    image: ResponseImageDto;

    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    screen: ResponseScreenDto;
  
}