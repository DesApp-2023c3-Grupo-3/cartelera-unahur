import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';

export class OrganoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un organo',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripcion de un organo',
    maxLength: 255,
    example: 'Organo',
    type: () => String,
  })
  descripcion: string;
}
