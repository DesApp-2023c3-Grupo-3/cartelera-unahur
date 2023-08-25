import { OmitType } from '../../nest/swagger/utils';
import { ImageDto } from './image.dto';

export class CreateImageDto extends OmitType(ImageDto, ['id'] as const) {}
