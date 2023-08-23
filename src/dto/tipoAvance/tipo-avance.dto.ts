import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';

export class TipoAvanceDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({ description: 'ID del tipo avance', example: 1 })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad nombre dede ser string' })
  @MaxLength(255)
  @ApiProperty({ maxLength: 255, example: 'Apertura de inscripciones' })
  nombre: string;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad detalle dede ser string' })
  @MaxLength(1024)
  @ApiProperty({ maxLength: 1024, example: 'Detalle' })
  detalle: string;

  @IsOptional()
  @IsString({ message: 'La propiedad textoFecha dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    maxLength: 255,
    example: 'Ingrese la fecha de apertura de las inscripciones',
  })
  textoFecha: string;

  @IsOptional()
  @IsBoolean({ message: 'La propiedad requiereArchivo debe ser boolena' })
  @ApiProperty({ example: 'false' })
  requiereArchivo: boolean;

  @IsOptional()
  @IsString({ message: 'La propiedad textoArchivo dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    maxLength: 255,
    example: 'Adjunte el archivo correspondiente',
  })
  textoArchivo: string;

  @IsOptional()
  @IsBoolean({ message: 'La propiedad mostrarConcurso debe ser boolena' })
  @ApiProperty({ example: 'false' })
  mostrarConcurso: boolean;

  @IsOptional()
  @IsBoolean({ message: 'La propiedad mostrarCargo debe ser boolena' })
  @ApiProperty({ example: 'false' })
  mostrarCargo: boolean;

  @IsOptional()
  @IsBoolean({ message: 'La propiedad cambioVacante debe ser boolena' })
  @ApiProperty({ example: 'false' })
  cambioVacante: boolean;

  @IsOptional()
  @IsBoolean({ message: 'La propiedad cambioCubierto debe ser boolena' })
  @ApiProperty({ example: 'false' })
  cambioCubierto: boolean;
}
