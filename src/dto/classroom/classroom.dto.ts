import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class ClassroomDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del aula',
    example: '1',
  })
  public readonly id: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre del aula',
    example: 'Aula superior',
  })
  public name: string;

}
