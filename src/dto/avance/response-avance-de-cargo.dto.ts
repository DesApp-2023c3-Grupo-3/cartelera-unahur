import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { objetoObligatorio } from '../commons/const';
import { TipoAvanceDto } from '../tipoAvance';
import { ResponseAvanceDto } from './response-avance.dto';

export class ResponseAvanceDeCargoDto extends OmitType(ResponseAvanceDto, [
  'cargo',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de avance',
  })
  tipoAvance: TipoAvanceDto;
}
