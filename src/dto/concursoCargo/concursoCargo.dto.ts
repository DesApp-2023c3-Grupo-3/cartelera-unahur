import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class ConcursoCargoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un concurso-cargo',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Concurso',
  })
  concurso: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Cargo',
  })
  cargo: IdIdentityDTO;

  @IsOptional()
  @IsString({ message: 'La propiedad nro_vacantes dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Numero de vacantes',
    maxLength: 255,
    example: '2',
    type: () => String,
  })
  nro_vacantes: string;

  userName?: string;
}
