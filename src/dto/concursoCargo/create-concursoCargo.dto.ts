import { OmitType } from '../../nest/swagger/utils';
import { ConcursoCargoDto } from './concursoCargo.dto';
export class CreateConcursoCargoDto extends OmitType(ConcursoCargoDto, [
  'id',
] as const) {}
