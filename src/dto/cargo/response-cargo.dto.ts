import { IsNotEmptyObject, IsOptional } from 'class-validator';
import { ApiProperty, OmitType } from '../../nest/swagger/utils';
import { objetoObligatorio } from '../commons/const';
import { DepartamentoDto } from '../departamento';
import { EstadoCargoDto } from '../estadoCargo';
import { FueroDto } from '../fuero';
import { OrganismoJurisdiccionalDto } from '../organismoJurisdiccional';
import { OrganoDto } from '../organo';
import { PersonaDto } from '../persona/persona.dto';
import { TipoCargoDto } from '../tipoCargo';
import { CargoDto } from './cargo.dto';

export class ResponseCargoDto extends OmitType(CargoDto, [
  'tipoCargo',
  'fuero',
  'organismoJurisdiccional',
  'departamentoJudicial',
  'estadoCargo',
  'organo',
] as const) {
  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Tipo de cargo',
  })
  tipoCargo: TipoCargoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Fuero',
  })
  fuero: FueroDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Organismo jurisdiccional',
  })
  organismoJurisdiccional: OrganismoJurisdiccionalDto;

  @IsNotEmptyObject({ nullable: true }, { message: objetoObligatorio })
  @IsOptional()
  @ApiProperty({
    description: 'Departamento judicial',
  })
  departamentoJudicial: DepartamentoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Estado de cargo',
  })
  estadoCargo: EstadoCargoDto;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({
    description: 'Organo',
  })
  organo: OrganoDto;

  @ApiProperty({
    description: 'Persona',
  })
  persona: PersonaDto;
}
