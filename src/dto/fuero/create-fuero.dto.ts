import { OmitType } from '../../nest/swagger/utils';
import { FueroDto } from './fuero.dto';

export class CreateFueroDto extends OmitType(FueroDto, ['id'] as const) {}
