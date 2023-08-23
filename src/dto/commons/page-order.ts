import { ApiProperty } from '../../nest/swagger/utils';
import { IsEnum, IsOptional } from 'class-validator';
import { Order } from '../commons/order.constant';

export class PageOrder {
  @ApiProperty({ enum: Order, default: Order.DESC })
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.DESC;
}
