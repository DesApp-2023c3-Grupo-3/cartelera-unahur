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

export class AvanceDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un avance',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({ description: 'Cargo' })
  cargo: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Tipo de avance',
  })
  tipoAvance: IdIdentityDTO;

  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Fecha del avance',
  })
  fecha: Date;

  @IsOptional()
  @IsString({ message: 'La propiedad detalle debe ser string' })
  @MaxLength(255, {
    message: 'La propiedad detalle no puede tener más de 255 caracteres',
  })
  @ApiProperty({
    description: 'Detalle del avance',
    maxLength: 255,
  })
  detalle: string;

  @IsOptional()
  @IsString({ message: 'El archivo debe ser string' })
  @MaxLength(255, {
    message: 'El archivo no puede tener más de 255 caracteres',
  })
  @ApiProperty({
    description: 'Archivo',
    maxLength: 255,
  })
  archivo: string;

  @IsOptional()
  @IsString({ message: 'La propiedad descripcion debe ser string' })
  @MaxLength(255, {
    message: 'La propiedad descripcion no puede tener más de 255 caracteres',
  })
  @ApiProperty({
    description: 'Descripcion del avance',
    maxLength: 255,
  })
  descripcion: string;

  userName?: string;
}
