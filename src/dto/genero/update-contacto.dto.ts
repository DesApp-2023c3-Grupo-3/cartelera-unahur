import { PartialType } from '../../nest/swagger/utils';
import { CreateGeneroDto } from './create-contacto.dto';

export class UpdateGeneroDto extends PartialType(CreateGeneroDto) {}
