import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '../../nest/swagger/utils';

export class ScheduleDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID del sector',
    example: 1,
  })
  public readonly id: number;

  @ApiProperty({
    description: 'Fecha de inicio del cronograma',type: () => Date
  })
  public startDate: Date;

  @ApiProperty({
    description: 'Fecha de finalización del cronograma',
    type: () => Date,
  })
  public endDate: Date;

  @ApiProperty({
    description: 'Horario de inicio del cronograma',
    type: () => Date,
  })
  public startHour: Date;

  @ApiProperty({
    description: 'Horario de finalización del cronograma',
    type: () => Date,
  })
  public endHour: Date;

  @ApiProperty({
    description: 'Días programados',
    example: '1',
  })
  public dayCode: string;
}
