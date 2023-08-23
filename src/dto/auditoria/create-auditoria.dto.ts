import { AccionEnum } from '../commons/enum-accion';
import { EntidadEnum } from '../commons/enum-entidad';

export class CreateAuditoriaDto {
  constructor(
    accion: AccionEnum,
    entidad: EntidadEnum,
    userName: string,
    identificador: number,
    link: string,
  ) {
    this.accion = accion;
    this.entidad = entidad;
    this.userName = userName;
    this.identificador = identificador;
    this.link = link;
  }
  accion: AccionEnum;
  entidad: EntidadEnum;
  userName: string;
  identificador: number;
  link: string;
  columna: string;
  oldValue: string;
  newValue: string;
}
