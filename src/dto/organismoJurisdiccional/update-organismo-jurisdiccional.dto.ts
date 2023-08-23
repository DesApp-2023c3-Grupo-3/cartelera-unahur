import { PartialType } from '../../nest/swagger/utils';
import { CreateOrganismoJurisdiccionalDto } from './create-organismo-jurisdiccional.dto';

export class UpdateOrganismoJurisdiccionalDto extends PartialType(
  CreateOrganismoJurisdiccionalDto,
) {}
