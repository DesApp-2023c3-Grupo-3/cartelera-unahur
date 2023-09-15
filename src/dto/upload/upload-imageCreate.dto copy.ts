import {  OmitType } from "../../nest/swagger/utils";
import { UploadImageDTO } from "./upload-image.dto";

export class UploadImageCreateDTO extends OmitType(UploadImageDTO, ['id'] as const){
  }

