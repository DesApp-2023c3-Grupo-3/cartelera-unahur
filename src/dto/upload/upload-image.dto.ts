import { ApiProperty } from "../../nest/swagger/utils";

export class UploadImageDTO {
  @ApiProperty()
  id: number;
  
  @ApiProperty({
    description: 'Suscripción en la pantalla',
    example: 'Tecnicatura Universitaria en Programación',
  })
  public originalName: string;

  @ApiProperty({
    description: 'Suscripción en la pantalla',
    example: 'Tecnicatura Universitaria en Programación',
  })
  public path: string;
  }

