import { OmitType } from '../../nest/swagger/utils';
import { PersonaDto } from './persona.dto';
export class CreatePersonaDto extends OmitType(PersonaDto, ['id'] as const) {}
