import { PartialType } from '../../nest/swagger/utils';
import { CreateContactoDto } from './create-contacto.dto';

export class UpdateContactoDto extends PartialType(CreateContactoDto) {}
