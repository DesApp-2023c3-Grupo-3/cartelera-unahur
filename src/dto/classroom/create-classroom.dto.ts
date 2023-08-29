import { OmitType } from '../../nest/swagger/utils';
import { ClassroomDto } from './classroom.dto';

export class CreateClassroomDto extends OmitType(ClassroomDto, ['id'] as const) {}
