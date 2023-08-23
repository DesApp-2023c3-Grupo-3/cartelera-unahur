import { OmitType } from '../../nest/swagger/utils';
import { AvanceDto } from './avance.dto';
export class CreateAvanceDto extends OmitType(AvanceDto, ['id'] as const) {}
