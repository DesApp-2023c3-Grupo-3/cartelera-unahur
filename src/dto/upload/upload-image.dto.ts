import { ApiProperty } from "../../nest/swagger/utils";

export class UploadCargoResponseDTO {
  @ApiProperty()
  originalName: string;
  @ApiProperty()
  fileName: string;
  @ApiProperty()
  size: number;
  @ApiProperty()
  mimetype: string;
  constructor(file: Express.Multer.File) {
    this.fileName = file.filename;
    this.originalName = file.originalname;
    this.size = file.size;
    this.mimetype = file.mimetype;
  }
}
