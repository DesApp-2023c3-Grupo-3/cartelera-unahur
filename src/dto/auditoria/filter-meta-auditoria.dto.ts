import { AccionEnum } from '../commons/enum-accion';
import { EntidadEnum } from '../commons/enum-entidad';

export class FilterMetaAuditoria {
  fechaDesde: Date | undefined;
  fechaHasta: Date | undefined;
  entidad: EntidadEnum | undefined;
  accion: AccionEnum | undefined;
  constructor(
    fechaDesde: Date | undefined,
    fechaHasta: Date | undefined,
    entidad: EntidadEnum | undefined,
    accion: AccionEnum | undefined,
  ) {
    this.fechaDesde = fechaDesde;
    this.fechaHasta = fechaHasta;
    this.entidad = entidad;
    this.accion = accion;
  }
}
