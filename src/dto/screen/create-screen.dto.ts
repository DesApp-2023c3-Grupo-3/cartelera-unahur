import { OmitType } from '../../nest/swagger/utils';
import { ScreenDto } from './screen.dto';

export class CreateScreenDto extends OmitType(ScreenDto, ['id'] as const) {}
