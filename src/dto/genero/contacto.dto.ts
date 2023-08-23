import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class ContactoDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre del contacto',
    example: 'Juan',
  })
  public readonly id: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Nombre del contacto',
    example: 'Juan',
  })
  public readonly nombre: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Edad del contacto',
    example: 25,
  })
  public readonly edad: number;

  @IsNotEmpty()
  @ApiProperty({
    description: 'Email del contacto',
    example: 'juan@gmail.com',
  })
  public readonly email: string;
}
