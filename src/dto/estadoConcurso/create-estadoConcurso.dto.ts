import { OmitType } from '../../nest/swagger/utils';
import { EstadoConcursoDto } from './estadoConcurso.dto';

export class CreateEstadoConcursoDto extends OmitType(EstadoConcursoDto, [
  'id',
] as const) {}
