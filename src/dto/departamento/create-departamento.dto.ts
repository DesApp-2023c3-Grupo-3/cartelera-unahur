import { OmitType } from '../../nest/swagger/utils';
import { DepartamentoDto } from './departamento.dto';
export class CreateDepartamentoDto extends OmitType(DepartamentoDto, [
  'id',
] as const) {}
