import { PartialType } from '../../nest/swagger/utils';
import { CreateConcursoDto } from './create-concurso.dto';

export class UpdateConcursoDto extends PartialType(CreateConcursoDto) {}
