import { IsNotEmptyObject } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { SectorDto } from "../sector";
import { AdvertisingSectorDto } from "./advertisingSector.dto";
import { ResponseAdvertisingDto } from "../advertising/response-advertising.dto";

export class ResponseAdvertisingSectorDto extends OmitType(AdvertisingSectorDto, ['advertising','sector'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @ApiProperty({
    })
    advertising: ResponseAdvertisingDto;

    @IsNotEmptyObject({ nullable: true }, )
    @ApiProperty({
    })
    sector: SectorDto;
}