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

export class PersonaDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de una persona',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Apellido de la persona',
    maxLength: 255,
    example: 'Lopez',
    type: () => String,
  })
  apellido: string;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Nombre de la persona',
    maxLength: 255,
    example: 'Juana',
    type: () => String,
  })
  nombre: string;

  @IsNotEmptyObject({ nullable: true }, { message: campoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Tipo de genero',
  })
  genero: IdIdentityDTO;

  @IsOptional()
  @IsString({ message: 'La propiedad legajo dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    maxLength: 255,
    example: '14262742',
    type: () => String,
  })
  legajo: string;

  @IsOptional()
  @IsString({ message: 'La propiedad trabajaEn dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    maxLength: 255,
    example: 'Palermo',
    type: () => String,
  })
  trabajaEn: string;

  @IsOptional()
  @IsString({ message: 'La propiedad cv dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    maxLength: 255,
    example: 'cv.pdf',
    type: () => String,
  })
  cv: string;

  @IsOptional()
  @IsString({ message: 'La propiedad foto dede ser string' })
  @MaxLength(1024)
  @ApiProperty({
    maxLength: 1024,
    example: 'foto.png',
    type: () => String,
  })
  foto: string;

  @IsOptional()
  @ApiProperty({
    description: 'Fecha de nacimiento',
    type: () => Date,
    example: '2000-01-03',
  })
  fechaNacimiento: Date;

  userName?: string;
}
