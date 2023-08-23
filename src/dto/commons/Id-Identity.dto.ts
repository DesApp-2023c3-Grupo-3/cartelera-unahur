import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
export class IdIdentityDTO {
  @IsNotEmpty({ message: 'identificador obligatorio' })
  @ApiProperty({ description: 'Identificador' })
  id: number;
}
