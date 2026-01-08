import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '../../../prisma/generated/prisma';

export class UpdateOrderStatusDto {
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsString()
  @IsOptional()
  note?: string;
}
