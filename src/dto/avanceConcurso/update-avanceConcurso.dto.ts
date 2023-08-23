import { PartialType } from '../../nest/swagger/utils';
import { CreateAvanceConcursoDto } from './create-avanceConcurso.dto';

export class UpdateAvanceConcursoDto extends PartialType(
  CreateAvanceConcursoDto,
) {}
