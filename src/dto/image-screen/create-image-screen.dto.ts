import { OmitType } from '../../nest/swagger/utils';
import { ImageScreenDto } from './image-screen.dto';

export class CreateImageScreenDto extends OmitType(ImageScreenDto, ['id'] as const) {}
