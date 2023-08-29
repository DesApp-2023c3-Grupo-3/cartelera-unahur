import { PartialType } from '../../nest/swagger/utils';
import { CreateScreenDto } from './create-screen.dto';

export class UpdateScreenDto extends PartialType(CreateScreenDto) {}
