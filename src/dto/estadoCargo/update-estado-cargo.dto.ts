import { PartialType } from '../../nest/swagger/utils';
import { CreateEstadoCargoDto } from './create-estado-cargo.dto';

export class UpdateEstadoCargoDto extends PartialType(CreateEstadoCargoDto) {}
