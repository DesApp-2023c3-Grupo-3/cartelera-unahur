import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';

export class OrganismoJurisdiccionalDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un organismo jurisdiccional',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripcion de un departamento Judicial',
    maxLength: 255,
    example: 'Juzgado de garantías',
    type: () => String,
  })
  descripcion: string;
}
