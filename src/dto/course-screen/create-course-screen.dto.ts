import { OmitType } from '../../nest/swagger/utils';
import { CourseScreenDto } from './course-screen.dto';

export class CreateCourseScreenDto extends OmitType(CourseScreenDto, ['id'] as const) {}
