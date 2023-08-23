import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';

export class EstadoCargoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un fuero',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripcion de un estado cargo',
    maxLength: 255,
    example: 'NO DESIGNADO',
    type: () => String,
  })
  descripcion: string;

  @IsBoolean({ message: 'La propiedad esVacancia debe ser boolena' })
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Estado de vacancia',
    example: 'false',
  })
  esVacancia: boolean;
}
