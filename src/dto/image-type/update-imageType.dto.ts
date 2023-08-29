import { PartialType } from '../../nest/swagger/utils';
import { CreateImageTypeDto } from './create-imageType.dto';

export class UpdateImageTypeDto extends PartialType(CreateImageTypeDto) {}
