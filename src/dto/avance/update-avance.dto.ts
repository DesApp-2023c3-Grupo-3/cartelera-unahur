import { PartialType } from '../../nest/swagger/utils';
import { CreateAvanceDto } from './create-avance.dto';

export class UpdateAvanceDto extends PartialType(CreateAvanceDto) {}
