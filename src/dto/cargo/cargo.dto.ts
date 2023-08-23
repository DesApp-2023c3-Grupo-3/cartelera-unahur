import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';
import { PersonaDto } from '../persona';

export class CargoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({ description: 'ID del cargo', example: 1 })
  public readonly id: number;

  @IsBoolean({ message: 'La propiedad funciona debe ser boolean' })
  @ApiProperty({ description: 'Cargo funciona', example: true })
  funciona: boolean;

  @IsOptional()
  @ApiProperty({
    description: 'Numero del cargo',
    maxLength: 255,
    example: '10',
    type: () => String,
  })
  numero: string;

  @IsOptional()
  @ApiProperty({ description: 'Fecha de alta del cargo', type: () => Date })
  fechaAlta: Date;

  @IsOptional()
  @ApiProperty({
    description: 'Descripción de la sede',
    maxLength: 255,
    example: 'sede administrativa',
    type: () => String,
  })
  sede: string;

  @IsOptional()
  @ApiProperty({
    description: 'Nombre del archivo',
    maxLength: 1024,
    example: 'designacion.pdf',
    type: () => String,
  })
  nombreArchivo: string;

  @ApiProperty({ description: 'Fecha de creación del cargo', type: () => Date })
  createdAt: Date;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Tipo de cargo',
  })
  tipoCargo: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Fuero',
  })
  fuero: IdIdentityDTO;

  @IsNotEmptyObject(
    { nullable: false },
    {
      message: campoObligatorio,
    },
  )
  @ApiProperty({
    description: 'Organismo jurisdiccional',
  })
  organismoJurisdiccional: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Departamento judicial',
  })
  departamentoJudicial: IdIdentityDTO;

  @ApiProperty({
    description: 'Estado cargo',
  })
  estadoCargo: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Organo',
  })
  organo: IdIdentityDTO;

  @ApiProperty({
    description: 'Persona',
  })
  persona: PersonaDto;

  userName?: string;
}
