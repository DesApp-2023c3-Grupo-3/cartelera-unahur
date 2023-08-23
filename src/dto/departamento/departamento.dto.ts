import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { campoObligatorio } from '../commons/const';

export class DepartamentoDto {
  @IsNotEmpty({ message: campoObligatorio })
  @ApiProperty({
    description: 'Id de un departamento',
    example: 1,
  })
  public readonly id: number;

  @IsNotEmpty({ message: campoObligatorio })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripcion de un departamento Judicial',
    maxLength: 255,
    example: 'Avellaneda Lanús',
    type: () => String,
  })
  descripcion: string;
}
