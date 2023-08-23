import { PartialType } from '../../nest/swagger/utils';
import { CreateOrganoDto } from './create-organo.dto';

export class UpdateOrganoDto extends PartialType(CreateOrganoDto) {}
