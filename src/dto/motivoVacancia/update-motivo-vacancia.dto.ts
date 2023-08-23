import { PartialType } from '../../nest/swagger/utils';
import { CreateMotivoVacanciaDto } from './create-motivo-vacancia.dto';

export class UpdateMotivoVacanciaDto extends PartialType(
  CreateMotivoVacanciaDto,
) {}
