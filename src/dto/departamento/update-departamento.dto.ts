import { PartialType } from '../../nest/swagger/utils';
import { CreateDepartamentoDto } from './create-departamento.dto';

export class UpdateDepartamentoDto extends PartialType(CreateDepartamentoDto) {}
