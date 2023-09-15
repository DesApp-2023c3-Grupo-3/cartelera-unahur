import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class AdvertisingScreenDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID de la imagen en pantalla',
    example: '1',
  })
  public readonly id: number;

  @IsOptional()
  @ApiProperty({
  })
  image?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  screen?: IdIdentityDTO;
}
