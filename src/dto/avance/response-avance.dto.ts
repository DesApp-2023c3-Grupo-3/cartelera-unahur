import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { ResponseCargoDto } from '../cargo';
import { objetoObligatorio } from '../commons/const';
import { TipoAvanceDto } from '../tipoAvance';
import { AvanceDto } from './avance.dto';

export class ResponseAvanceDto extends OmitType(AvanceDto, [
  'tipoAvance',
  'cargo',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({ description: 'Cargo' })
  cargo: ResponseCargoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de avance',
  })
  tipoAvance: TipoAvanceDto;
}
