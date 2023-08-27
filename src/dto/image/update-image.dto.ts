import { PartialType } from '../../nest/swagger/utils';
import { CreateImageDto } from './create-image.dto';

export class UpdateImageDto extends PartialType(CreateImageDto) {}
