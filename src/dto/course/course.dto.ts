import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';


export class CourseDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del curso',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Nombre del curso',
    example: 'Estrategias de Persistencia',
  })
  public name: string;

  @IsOptional()
  @ApiProperty({
  })
  classroom?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  user?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  sector?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  schedule?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  subject?: IdIdentityDTO;
}
