import { PartialType } from '../../nest/swagger/utils';
import { CreateAdvertisingSectorDto } from './create-advertisingSector.dto';

export class UpdateAdvertisingSectorDto extends PartialType(CreateAdvertisingSectorDto) {}
