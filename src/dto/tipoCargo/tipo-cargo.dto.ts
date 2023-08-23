import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';

export class TipoCargoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un tipo cargo',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Crear un cargo',
    maxLength: 255,
    example: 'Procurador/a',
    type: () => String,
  })
  descripcion: string;
}
