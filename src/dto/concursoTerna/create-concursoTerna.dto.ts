import { OmitType } from '../../nest/swagger/utils';
import { ConcursoTernaDto } from './concursoTerna.dto';
export class CreateConcursoTernaDto extends OmitType(ConcursoTernaDto, [
  'id',
] as const) {}
