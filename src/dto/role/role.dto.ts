import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class RoleDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del rol',
    example: '1',
  })
  public readonly id: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre del rol',
    example: 'Gestión Estudiantil',
  })
  public name: string;

}
