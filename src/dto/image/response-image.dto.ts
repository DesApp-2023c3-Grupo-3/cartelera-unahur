import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { ImageDto } from "./image.dto";
import { ImageTypeDto } from "../image-type";
import { ScheduleDto } from "../schedule";
import { SectorDto } from "../sector";
import { ResponseUserDto } from "../user";

export class ResponseImageDto extends OmitType(ImageDto, ['imageType','user','sector','schedule'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    imageType: ImageTypeDto;

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