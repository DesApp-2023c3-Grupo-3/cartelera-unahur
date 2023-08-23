import { PartialType } from '../../nest/swagger/utils';
import { CreateCargoDto } from './create-cargo.dto';
export class UpdateCargoDto extends PartialType(CreateCargoDto) {}
