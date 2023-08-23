import { OmitType } from '../../nest/swagger/utils';
import { TipoAvanceDto } from './tipo-avance.dto';

export class CreateTipoAvanceDto extends OmitType(TipoAvanceDto, [
  'id',
] as const) {}
