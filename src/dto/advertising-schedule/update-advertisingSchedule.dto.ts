import { PartialType } from '../../nest/swagger/utils';
import { CreateAdvertisingScheduleDto } from './create-advertisingSchedule.dto';

export class UpdateAdvertisingScheduleDto extends PartialType(CreateAdvertisingScheduleDto) {}
