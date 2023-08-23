import { PartialType } from '../../nest/swagger/utils';
import { CreateConcursoTernaDto } from './create-concursoTerna.dto';

export class UpdateConcursoTernaDto extends PartialType(
  CreateConcursoTernaDto,
) {}
