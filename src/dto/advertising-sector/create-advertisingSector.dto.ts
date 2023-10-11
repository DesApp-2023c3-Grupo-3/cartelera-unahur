import { OmitType } from '../../nest/swagger/utils';
import { AdvertisingSectorDto } from './advertisingSector.dto';

export class CreateAdvertisingSectorDto extends OmitType(AdvertisingSectorDto, ['id'] as const) {}
