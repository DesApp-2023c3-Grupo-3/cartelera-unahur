import { OmitType } from '../../nest/swagger/utils';
import { AdvertisingScheduleDto } from './advertisingSchedule.dto';

export class CreateAdvertisingScheduleDto extends OmitType(AdvertisingScheduleDto, ['id'] as const) {}
