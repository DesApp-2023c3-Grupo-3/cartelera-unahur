import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { ResponseConcursoDto } from '../concurso';
import { objetoObligatorio } from '../commons/const';
import { TipoAvanceDto } from '../tipoAvance';
import { AvanceConcursoDto } from './avanceConcurso.dto';

export class ResponseAvanceConcursoDto extends OmitType(AvanceConcursoDto, [
  'concurso',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({ description: 'Cargo' })
  concurso: ResponseConcursoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de avance',
  })
  tipoAvance: TipoAvanceDto;
}
