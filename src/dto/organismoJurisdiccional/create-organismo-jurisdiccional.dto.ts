import { OmitType } from '../../nest/swagger/utils';
import { OrganismoJurisdiccionalDto } from './organismo-jurisdiccional.dto';

export class CreateOrganismoJurisdiccionalDto extends OmitType(
  OrganismoJurisdiccionalDto,
  ['id'] as const,
) {}
