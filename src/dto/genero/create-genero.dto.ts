import { OmitType } from '../../nest/swagger/utils';
import { GeneroDto } from './genero.dto';

export class CreateGeneroDto extends OmitType(GeneroDto, ['id'] as const) {}
