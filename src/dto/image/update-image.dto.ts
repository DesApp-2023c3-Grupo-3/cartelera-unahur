import { PartialType } from '../../nest/swagger/utils';
import { CreateImageDto } from './create-image.dto';

export class UpdateSectorDto extends PartialType(CreateImageDto) {}
