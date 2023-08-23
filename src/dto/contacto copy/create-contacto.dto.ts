import { OmitType } from '../../nest/swagger/utils';
import { ContactoDto } from './contacto.dto';

export class CreateContactoDto extends OmitType(ContactoDto, ['id'] as const) {}
