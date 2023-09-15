import { PartialType } from '../../nest/swagger/utils';
import { CreateAdvertisingTypeDto } from './create-advertisingType.dto';

export class UpdateAdvertisingTypeDto extends PartialType(CreateAdvertisingTypeDto) {}
