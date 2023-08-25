import { OmitType } from '../../nest/swagger/utils';
import { ScheduleDto } from './schedule.dto';

export class CreateScheduleDto extends OmitType(ScheduleDto, ['id'] as const) {}
