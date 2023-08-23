import { PartialType } from '../../nest/swagger/utils';
import { CreatePersonaCargoDto } from './create-persona-cargo.dto';

export class UpdatePersonaCargoDto extends PartialType(CreatePersonaCargoDto) {}
