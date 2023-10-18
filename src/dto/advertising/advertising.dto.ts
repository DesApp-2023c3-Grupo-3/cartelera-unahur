import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';
import {   ScheduleDto } from '../schedule';

export class AdvertisingDto {
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

  @ApiProperty({
    description: 'Payload del aviso',
    example: 'http://youtube.com/watch?v=1',
  })
  public payload: string;

  @IsOptional()
  @ApiProperty({
  })
  advertisingType?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  user?: IdIdentityDTO;

  @ApiProperty({type: [ScheduleDto]})
  schedules: ScheduleDto[];

}
