import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { objetoObligatorio } from '../commons/const';
import { ConcursoTernaDto } from './concursoTerna.dto';
import { ConcursoDto } from '../concurso/concurso.dto';
import { PersonaDto } from '../persona/persona.dto';

export class ResponseConcursoTernaDto extends OmitType(ConcursoTernaDto, [
  'concurso',
  'persona',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Concurso',
  })
  concurso: ConcursoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Persona',
  })
  persona: PersonaDto;
}
