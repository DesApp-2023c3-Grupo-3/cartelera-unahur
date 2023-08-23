import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { objetoObligatorio } from '../commons/const';
import { ConcursoDto } from './concurso.dto';
import { FueroDto } from '../fuero';
import { DepartamentoDto } from '../departamento';
import { OrganismoJurisdiccionalDto } from '../organismoJurisdiccional';
import { TipoCargoDto } from '../tipoCargo';
import { EstadoConcursoDto } from '../estadoConcurso';

export class ResponseConcursoDto extends OmitType(ConcursoDto, [
  'estadoConcurso',
  'tipoCargo',
  'organismoJurisdiccional',
  'departamentoJudicial',
  'fuero',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de genero',
  })
  estadoConcurso: EstadoConcursoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de genero',
  })
  tipoCargo: TipoCargoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de genero',
  })
  organismoJurisdiccional: OrganismoJurisdiccionalDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Departamento judicial',
  })
  departamentoJudicial: DepartamentoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Fuero',
  })
  fuero: FueroDto;
}
