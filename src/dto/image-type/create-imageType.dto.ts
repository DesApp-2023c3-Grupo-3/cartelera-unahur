import { OmitType } from '../../nest/swagger/utils';
import { ImageTypeDto } from './imageType.dto';

export class CreateImageTypeDto extends OmitType(ImageTypeDto, ['id'] as const) {}
