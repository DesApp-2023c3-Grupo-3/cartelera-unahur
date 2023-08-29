import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { ScreenDto } from "./screen.dto";
import { SectorDto } from "../sector";

export class ResponseScreenDto extends OmitType(ScreenDto, ['sector'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    sector: SectorDto;
  
}