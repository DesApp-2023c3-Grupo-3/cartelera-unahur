import { OmitType } from '../../nest/swagger/utils';
import { UserDto } from './user.dto';

export class LoginUserDto extends OmitType(UserDto, ['id','name','role'] as const) {}
