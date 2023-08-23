import { ApiProperty } from '../../nest/swagger/utils';
import { PageMetaDto } from '../commons/page-meta.dto';
import { FilterMetaAuditoria } from './filter-meta-auditoria.dto';
import { PageMetaDtoParametersAuditoria } from './page-meta-dto-params-auditoria.interface';

export class PageMetaAuditoriaDto extends PageMetaDto {
  @ApiProperty()
  filter: FilterMetaAuditoria;

  constructor({
    pageOptionsAuditoriaDto,
    itemCount,
  }: PageMetaDtoParametersAuditoria) {
    super({ pageOptionsDto: pageOptionsAuditoriaDto, itemCount });
    this.filter = new FilterMetaAuditoria(
      pageOptionsAuditoriaDto.fechaDesde,
      pageOptionsAuditoriaDto.fechaHasta,
      pageOptionsAuditoriaDto.entidad,
      pageOptionsAuditoriaDto.accion,
    );
  }
}
