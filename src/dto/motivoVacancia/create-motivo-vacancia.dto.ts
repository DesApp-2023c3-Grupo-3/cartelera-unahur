import { OmitType } from '../../nest/swagger/utils';
import { MotivoVacanciaDto } from './motivo-vacancia.dto';

export class CreateMotivoVacanciaDto extends OmitType(MotivoVacanciaDto, [
  'id',
] as const) {}
