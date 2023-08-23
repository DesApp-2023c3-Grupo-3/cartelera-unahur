import { OmitType } from '../../nest/swagger/utils';
import { EstadoCargoDto } from './estado-cargo.dto';

export class CreateEstadoCargoDto extends OmitType(EstadoCargoDto, [
  'id',
] as const) {}
