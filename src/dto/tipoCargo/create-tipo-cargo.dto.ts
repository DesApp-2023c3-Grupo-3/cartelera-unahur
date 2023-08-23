import { OmitType } from '../../nest/swagger/utils';
import { TipoCargoDto } from './tipo-cargo.dto';

export class CreateTipoCargoDto extends OmitType(TipoCargoDto, [
  'id',
] as const) {}
