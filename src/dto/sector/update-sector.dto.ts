import { PartialType } from '../../nest/swagger/utils';
import { CreateSectorDto } from './create-sector.dto';

export class UpdateSectorDto extends PartialType(CreateSectorDto) {}
