import { OmitType } from '../../nest/swagger/utils';
import { ScreenDto } from './screen.dto';

export class UpdateScreenDto extends OmitType(ScreenDto, ['sector'] as const) {
  sector: {
    id: string,
    topic: string,
    name: string
  };
}
