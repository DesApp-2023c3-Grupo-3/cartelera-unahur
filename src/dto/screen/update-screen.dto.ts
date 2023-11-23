import { OmitType } from '../../nest/swagger/utils';
import { ScreenDto } from './screen.dto';

export class UpdateScreenDto extends OmitType(ScreenDto, ['subscription', 'sector'] as const) {}
