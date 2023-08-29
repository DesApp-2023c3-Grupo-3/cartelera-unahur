import { OmitType } from '../../nest/swagger/utils';
import { SubjectDto } from './subject.dto';

export class CreateSubjectDto extends OmitType(SubjectDto, ['id'] as const) {}
