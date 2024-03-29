import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class AdvertisingTypeDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID de la imagen',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Nombre de la imagen',
    example: 'Foto de Edificio Malvinas',
  })
  public name: string;

}
