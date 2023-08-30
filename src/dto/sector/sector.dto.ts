import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class SectorDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del sector',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Nombre del sector',
    example: 'Edificio Malvinas',
  })
  public name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Tópico del sector',
    example: 'Materias',
  })
  public topic: string;

}
