import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';
import {AdvertisingDto } from './advertising.dto';

export class CreateAdvertisingDto extends OmitType(AdvertisingDto, ['id'] as const) {
  @ApiProperty({type: [IdIdentityDTO]})
  sectors: IdIdentityDTO[];
}
