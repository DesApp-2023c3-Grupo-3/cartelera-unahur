import { PartialType } from '../../nest/swagger/utils';
import { CreateGeneroDto } from './create-genero.dto';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {}
