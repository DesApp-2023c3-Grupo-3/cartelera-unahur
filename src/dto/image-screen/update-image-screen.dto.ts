import { PartialType } from '../../nest/swagger/utils';
import { CreateImageScreenDto } from './create-image-screen.dto';

export class UpdateImageScreenDto extends PartialType(CreateImageScreenDto) {}
