import { OmitType } from '../../nest/swagger/utils';
import { OrganoDto } from './organo.dto';

export class CreateOrganoDto extends OmitType(OrganoDto, ['id'] as const) {}
