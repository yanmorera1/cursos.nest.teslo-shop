import { IsOptional, IsPositive, Min } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  @ApiProperty({ required: false })
  limit?: number

  @IsOptional()
  @IsPositive()
  @Min(0)
  @Type(() => Number)
  @ApiProperty({ required: false })
  offset?: number
}
