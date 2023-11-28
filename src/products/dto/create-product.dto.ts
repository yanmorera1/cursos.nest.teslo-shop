import { ApiProperty } from '@nestjs/swagger'
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator'

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  @ApiProperty({ example: 'Camisa', minimum: 1, required: true })
  title: string

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @ApiProperty({ example: 20000, required: false })
  price?: number

  @IsString()
  @IsOptional()
  @ApiProperty({ readOnly: false })
  description?: string

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  slug?: string

  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiProperty({ required: false })
  stock?: number

  @IsString({ each: true })
  @IsArray()
  @ApiProperty({ required: true })
  sizes: string[]

  @IsString()
  @IsIn(['men', 'women', 'kid', 'unisex'])
  @ApiProperty({ required: true })
  gender: string

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  @ApiProperty()
  tags: string[]
}
