import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';
import { IdIdentityDTO } from '../commons/Id-Identity.dto';

export class CourseScreenDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del curso en pantalla',
    example: '1',
  })
  public readonly id: number;

  @IsOptional()
  @ApiProperty({
  })
  course?: IdIdentityDTO;

  @IsOptional()
  @ApiProperty({
  })
  screen?: IdIdentityDTO;
}
