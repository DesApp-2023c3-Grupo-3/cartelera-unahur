import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class AdvertisingSectorDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID ',
    example: 1,
  })
  public readonly id: number;

  @IsOptional()
  @ApiProperty({
  })
  advertising?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  sector?: IdIdentityDTO;
}
