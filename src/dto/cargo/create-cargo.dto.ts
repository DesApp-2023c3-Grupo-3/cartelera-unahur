import { OmitType } from '../../nest/swagger/utils';
import { CargoDto } from './cargo.dto';
export class CreateCargoDto extends OmitType(CargoDto, ['id'] as const) {}
