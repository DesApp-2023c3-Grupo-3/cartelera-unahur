import { PartialType } from '../../nest/swagger/utils';
import { CreateAdvertisingScreenDto } from './create-advertising-screen.dto';

export class UpdateAdvertisingScreenDto extends PartialType(CreateAdvertisingScreenDto) {}
