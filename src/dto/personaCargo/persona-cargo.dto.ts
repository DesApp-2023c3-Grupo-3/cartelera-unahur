import { IsNotEmpty, IsNotEmptyObject, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class PersonaCargoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({ description: 'ID de la persona cargo', example: 1 })
  public readonly id: number;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Cargo',
  })
  cargo: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({
    description: 'Persona',
  })
  persona: IdIdentityDTO;

  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Fecha inicio de persona cargo',
    type: () => Date,
  })
  fechaInicio: Date;

  @IsOptional()
  @ApiProperty({ description: 'Fecha fin de persona cargo', type: () => Date })
  fechaFin: Date;

  @ApiProperty({
    description: 'Fecha de creación de la persona cargo',
    type: () => Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Fecha de actualizacion de la persona cargo',
    type: () => Date,
  })
  updatedAt: Date;

  userName?: string;
}
