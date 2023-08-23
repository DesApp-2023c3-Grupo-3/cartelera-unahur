import { ApiProperty } from '../../nest/swagger/utils';
import { Type } from 'class-transformer';
import { IsOptional, IsEnum } from 'class-validator';
import { sub } from 'date-fns';
import { PageOptionsDto } from '../commons/page-options.dto';
import { AccionEnum } from '../commons/enum-accion';
import { EntidadEnum } from '../commons/enum-entidad';

export class PageOptionsAuditoriaDto extends PageOptionsDto {
  @ApiProperty({
    default: new Date(sub(new Date(), { months: 1 }).setHours(0, 0, 0, 0)),
  })
  @Type(() => Date)
  @IsOptional()
  readonly fechaDesde?: Date = sub(new Date(), { months: 1 });

  @ApiProperty({
    default: new Date(new Date().setHours(23, 59, 59, 999)),
  })
  @Type(() => Date)
  @IsOptional()
  readonly fechaHasta?: Date = new Date();

  @ApiProperty({
    default: EntidadEnum.ALL,
  })
  @IsOptional()
  @IsEnum(EntidadEnum)
  readonly entidad?: EntidadEnum = EntidadEnum.ALL;

  @ApiProperty({
    default: AccionEnum.ALL,
  })
  @IsOptional()
  @IsEnum(AccionEnum)
  readonly accion?: AccionEnum = AccionEnum.ALL;
}
