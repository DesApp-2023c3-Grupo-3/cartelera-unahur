import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class ImageDto {
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

  @IsOptional()
  @ApiProperty({
  })
  imageType?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  user?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  sector?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  schedule?: IdIdentityDTO;

}
