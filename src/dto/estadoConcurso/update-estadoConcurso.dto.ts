import { PartialType } from '../../nest/swagger/utils';
import { CreateEstadoConcursoDto } from './create-estadoConcurso.dto';

export class UpdateEstadoConcursoDto extends PartialType(
  CreateEstadoConcursoDto,
) {}
