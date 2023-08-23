import { PartialType } from '../../nest/swagger/utils';
import { CreateTipoCargoDto } from './create-tipo-cargo.dto';

export class UpdateTipoCargoDto extends PartialType(CreateTipoCargoDto) {}
