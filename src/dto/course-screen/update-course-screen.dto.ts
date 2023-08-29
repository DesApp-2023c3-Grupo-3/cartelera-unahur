import { PartialType } from '../../nest/swagger/utils';
import { CreateCourseScreenDto } from './create-course-screen.dto';

export class UpdateCourseScreenDto extends PartialType(CreateCourseScreenDto) {}
