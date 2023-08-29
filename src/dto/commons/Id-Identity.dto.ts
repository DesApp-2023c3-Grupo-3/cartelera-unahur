import { ApiProperty } from '../../nest/swagger/utils';
export class IdIdentityDTO {
  @ApiProperty({ description: 'Identificador' })
  id: number;
}
