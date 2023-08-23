import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { objetoObligatorio } from '../commons/const';
import { ConcursoCargoDto } from './concursoCargo.dto';
import { CargoDto } from '../cargo';
import { ConcursoDto } from '../concurso/concurso.dto';

export class ResponseConcursoCargoDto extends OmitType(ConcursoCargoDto, [
  'concurso',
  'cargo',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Concurso',
  })
  concurso: ConcursoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Cargo',
  })
  cargo: CargoDto;
}
