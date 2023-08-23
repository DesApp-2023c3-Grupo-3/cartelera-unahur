import { OmitType } from '../../nest/swagger/utils';
import { CreateAvanceDto } from './create-avance.dto';

export class UpdateAvanceEstadoDto extends OmitType(CreateAvanceDto, [
  'cargo',
  'tipoAvance',
] as const) {}
