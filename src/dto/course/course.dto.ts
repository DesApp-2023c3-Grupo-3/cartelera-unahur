import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class CourseDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del curso',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Nombre del curso',
    example: 'Estrategias de Persistencia',
  })
  public readonly name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'DNI del curso',
    example: '12345678',
  })
  public readonly dni: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Contraseña del curso',
    example: 'contraseña123',
  })
  public readonly password: string;
}
