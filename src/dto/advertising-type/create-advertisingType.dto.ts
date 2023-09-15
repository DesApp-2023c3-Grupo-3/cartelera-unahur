import { OmitType } from '../../nest/swagger/utils';
import { AdvertisingTypeDto } from './advertisingType.dto';

export class CreateAdvertisingTypeDto extends OmitType(AdvertisingTypeDto, ['id'] as const) {}
