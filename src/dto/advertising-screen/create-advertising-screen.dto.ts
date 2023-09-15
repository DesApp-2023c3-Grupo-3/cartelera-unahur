import { OmitType } from '../../nest/swagger/utils';
import { AdvertisingScreenDto } from './advertising-screen.dto';

export class CreateAdvertisingScreenDto extends OmitType(AdvertisingScreenDto, ['id'] as const) {}
