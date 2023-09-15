import { PartialType } from '../../nest/swagger/utils';
import { CreateAdvertisingDto } from './create-advertising.dto';

export class UpdateAdvertisingDto extends PartialType(CreateAdvertisingDto) {}
