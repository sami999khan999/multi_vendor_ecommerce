import { IsInt, IsOptional, IsEnum } from 'class-validator';
import { ShipmentStatus } from '../../../prisma/generated/prisma';
import { BasePaginationDto } from '../../shared/dtos';

export class ShipmentFilterDto extends BasePaginationDto {
  @IsOptional()
  @IsInt()
  orderId?: number;

  @IsOptional()
  @IsInt()
  organizationId?: number;

  @IsOptional()
  @IsEnum(ShipmentStatus)
  status?: ShipmentStatus;

  @IsOptional()
  @IsInt()
  fromLocationId?: number;
}
