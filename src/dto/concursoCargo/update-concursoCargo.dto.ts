import { PartialType } from '../../nest/swagger/utils';
import { CreateConcursoCargoDto } from './create-concursoCargo.dto';

export class UpdateConcursoCargoDto extends PartialType(
  CreateConcursoCargoDto,
) {}
