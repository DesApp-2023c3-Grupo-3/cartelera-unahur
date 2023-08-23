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

export class ConcursoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un concurso',
    example: 1,
  })
  public readonly id: number;

  @IsOptional()
  @IsString({ message: 'La propiedad nro_concurso dede ser string' })
  @MaxLength(50)
  @ApiProperty({
    description: 'Numero de un concurso',
    maxLength: 50,
    example: '5',
    type: () => String,
  })
  nro_concurso: string;

  @IsOptional()
  @IsString({ message: 'La propiedad nro_expediente dede ser string' })
  @MaxLength(50)
  @ApiProperty({
    description: 'Numero de un expediente',
    maxLength: 50,
    example: '2',
    type: () => String,
  })
  nro_expediente: string;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Estado concurso',
  })
  estadoConcurso: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Estado concurso',
  })
  tipoCargo: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Estado concurso',
  })
  organismoJurisdiccional: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Estado concurso',
  })
  departamentoJudicial: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Estado concurso',
  })
  fuero: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
    description: 'Fecha de apertura',
    type: () => Date,
  })
  fechaApertura: Date;

  @IsOptional()
  @ApiProperty({
    description: 'Fecha de comunicacion',
    type: () => Date,
  })
  fechaComunicacion: Date;

  userName?: string;
}
