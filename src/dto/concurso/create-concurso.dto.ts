import { OmitType } from '../../nest/swagger/utils';
import { ConcursoDto } from './concurso.dto';
export class CreateConcursoDto extends OmitType(ConcursoDto, ['id'] as const) {}
