import { PartialType } from '../../nest/swagger/utils';
import { CreateAuditoriaDto } from './create-auditoria.dto';

export class UpdateAuditoriaDto extends PartialType(CreateAuditoriaDto) {}
