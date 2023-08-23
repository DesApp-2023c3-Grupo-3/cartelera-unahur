import { OmitType } from '../../nest/swagger/utils';
import { AvanceConcursoDto } from './avanceConcurso.dto';
export class CreateAvanceConcursoDto extends OmitType(AvanceConcursoDto, [
  'id',
] as const) {}
