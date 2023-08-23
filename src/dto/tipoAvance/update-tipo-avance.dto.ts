import { PartialType } from '../../nest/swagger/utils';
import { CreateTipoAvanceDto } from './create-tipo-avance.dto';

export class UpdateTipoAvanceDto extends PartialType(CreateTipoAvanceDto) {}
