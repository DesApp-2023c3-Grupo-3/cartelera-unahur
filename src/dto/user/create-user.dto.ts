import { OmitType } from '../../nest/swagger/utils';
import { UserDto } from './user.dto';

export class CreateUserDto extends OmitType(UserDto, ['id'] as const) {}
