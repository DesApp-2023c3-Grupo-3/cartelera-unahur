import { OmitType } from '../../nest/swagger/utils';
import { PersonaCargoDto } from './persona-cargo.dto';

export class CreatePersonaCargoDto extends OmitType(PersonaCargoDto, [
  'id',
] as const) {}
