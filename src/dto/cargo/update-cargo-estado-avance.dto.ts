import { IsNotEmptyObject } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { UpdateAvanceEstadoDto } from '../avance/update-avance-estado.dto';
import { campoObligatorio, objetoObligatorio } from '../commons/const';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';
export class UpdateCargoEstadoAvance {
  @IsNotEmptyObject({ nullable: false }, { message: campoObligatorio })
  @ApiProperty({ description: 'Estado cargo' })
  estadoCargo: IdIdentityDTO;

  @IsNotEmptyObject({ nullable: false }, { message: objetoObligatorio })
  @ApiProperty({ description: 'Avance' })
  avanceDto: UpdateAvanceEstadoDto;
}
