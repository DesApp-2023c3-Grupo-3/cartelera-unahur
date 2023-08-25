import { PartialType } from '../../nest/swagger/utils';
import { CreateCourseDto } from './create-course.dto';

export class UpdateSectorDto extends PartialType(CreateCourseDto) {}
