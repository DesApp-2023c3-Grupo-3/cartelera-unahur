import { OmitType } from '../../nest/swagger/utils';
import {AdvertisingDto } from './advertising.dto';

export class CreateAdvertisingDto extends OmitType(AdvertisingDto, ['id'] as const) {}
