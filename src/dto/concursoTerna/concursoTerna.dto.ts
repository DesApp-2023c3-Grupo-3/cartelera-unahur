import {
  IsBoolean,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { IdIdentityDTO, campoObligatorio } from '../..';
import { ApiProperty } from '../../nest/swagger/utils';

export class ConcursoTernaDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un concurso-terna',
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
    description: 'Persona',
  })
  persona: IdIdentityDTO;

  @IsOptional()
  @IsString({ message: 'La propiedad nro_terna dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Numero de terna',
    maxLength: 255,
    example: 'Nro. 223',
    type: () => String,
  })
  nro_terna: string;

  @IsOptional()
  @IsString({ message: 'La propiedad comentario dede ser string' })
  @MaxLength(1024)
  @ApiProperty({
    description: 'Comentario',
    maxLength: 1024,
    example: 'Comentario sobre concurso-terna',
    type: () => String,
  })
  comentario: string;

  @IsOptional()
  @IsBoolean({ message: 'La propiedad preselección debe ser boolean' })
  @ApiProperty({ description: 'Preselección', example: true })
  preseleccion: boolean;

  userName?: string;
}
