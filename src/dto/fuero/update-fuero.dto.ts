import { PartialType } from '../../nest/swagger/utils';
import { CreateFueroDto } from './create-fuero.dto';

export class UpdateFueroDto extends PartialType(CreateFueroDto) {}
