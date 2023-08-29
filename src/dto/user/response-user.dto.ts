import { IsNotEmptyObject, IsOptional } from "class-validator";
import { ApiProperty, OmitType } from "../../nest/swagger/utils";
import { UserDto } from "./user.dto";
import { RoleDto } from "../role";

export class ResponseUserDto extends OmitType(UserDto, ['role'] as const) {
    @IsNotEmptyObject({ nullable: true }, )
    @IsOptional()
    @ApiProperty({
    })
    role: RoleDto;
  
}