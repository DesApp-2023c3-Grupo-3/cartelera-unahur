import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { objetoObligatorio } from '../commons/const';
import { PersonaDto } from './persona.dto';
import { GeneroDto } from '../genero';

export class ResponsePersonaDto extends OmitType(PersonaDto, [
  'genero',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de genero',
  })
  genero: GeneroDto;
}
