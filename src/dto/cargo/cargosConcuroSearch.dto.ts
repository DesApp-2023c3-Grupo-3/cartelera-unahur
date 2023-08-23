import { IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class CargosConcursoSearchDto {
  @ApiProperty({
    required: false,
    description: 'Identificador del Tipo de Cargo',
  })
  @IsOptional()
  readonly tipoCargoId: number = 0;

  @ApiProperty({
    required: false,
    description: 'Identificador del Organismo jurisdiccional',
  })
  @IsOptional()
  readonly organismoJurisdiccionalId: number = 0;

  @ApiProperty({
    required: false,
    description: 'Identificador del Fuero',
  })
  @IsOptional()
  readonly fueroId: number = 0;

  @ApiProperty({
    required: false,
    description: 'Identificador del Departamento Judicial',
  })
  @IsOptional()
  readonly departamentoJudicialId: number = 0;
}
