import { OmitType } from '../../nest/swagger/utils';
import { SectorDto } from './sector.dto';

export class CreateSectorDto extends OmitType(SectorDto, ['id'] as const) {}
