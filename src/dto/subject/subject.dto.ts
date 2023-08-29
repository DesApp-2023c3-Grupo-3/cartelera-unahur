import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class SubjectDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del tema',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Nombre del tema',
    example: 'Ejemplo..',
  })
  public name: string;

}
