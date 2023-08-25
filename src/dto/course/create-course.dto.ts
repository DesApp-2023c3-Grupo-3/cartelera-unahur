import { OmitType } from '../../nest/swagger/utils';
import { CourseDto } from './course.dto';

export class CreateCourseDto extends OmitType(CourseDto, ['id'] as const) {}
