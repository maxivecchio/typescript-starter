import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsIn, Length } from 'class-validator';

export class CreateAccountDto {
  @ApiProperty({
    description: 'Type of account: C for Company, I for Individual',
    enum: ['C', 'I'],
    example: 'C'
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(['C', 'I'])
  type: string;

  @ApiProperty({
    description: 'Name of the account',
    maxLength: 100,
    example: 'Company XYZ'
  })
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @ApiProperty({
    description: 'Country code (optional)',
    maxLength: 2,
    example: 'PA',
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(2, 2)
  country?: string;

  @ApiProperty({
    description: 'First tax ID (optional)',
    maxLength: 100,
    example: '123456789',
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(1, 100)
  tax_id1?: string;

  @ApiProperty({
    description: 'Second tax ID (optional)',
    maxLength: 100,
    example: '987654321',
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(1, 100)
  tax_id2?: string;

  @ApiProperty({
    description: 'Subdomain (optional)',
    maxLength: 100,
    example: 'companyxyz',
    required: false
  })
  @IsString()
  @IsOptional()
  @Length(1, 100)
  subdomain?: string;

  @ApiProperty({
    description: 'Measurement unit: F for Foot, M for Meter',
    enum: ['F', 'M'],
    example: 'M'
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(['F', 'M'])
  measure_unit: string;

  @ApiProperty({
    description: 'Status of the account: A for Active, I for Inactive, B for Blocked',
    enum: ['A', 'I', 'B'],
    example: 'A'
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(['A', 'I', 'B'])
  status: string;
}