import { OmitType } from '../../nest/swagger/utils';
import { RoleDto } from './role.dto';

export class CreateRoleDto extends OmitType(RoleDto, ['id'] as const) {}
